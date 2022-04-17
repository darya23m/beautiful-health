import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useRegisterMutation } from '../../../../features/users/usersApi';

import styles from './RegistrationForm.module.scss';
import cx from 'classnames';

const RegistrationForm = () => {
  const [register] = useRegisterMutation();
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [nameErrors, setNameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
 
  const validateName = () => {
    let errors = [];
    const nameRegEx = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;

    if (name.length === 0) {
      errors.push('Необходимо ввести имя и фамилию')
    } else if (!nameRegEx.test(name)) {
      errors.push('Используйте, пожалуйста, только буквы')
    };

    if (errors.length === 0) {
      setIsNameValid(true)
    };
    setNameErrors(errors);
    return errors;
  }

  const validateEmail = () => {
    let errors = [];
    const emailRegEx = /^[A-Za-z0-9][A-Za-z0-9-+_.]*[A-Za-z0-9]@[A-Za-z0-9][A-Za-z0-9-_.]+\.[A-Za-z]{2,}$/im;
 
    if (email.length === 0) {
      errors.push('Введите ваш e-mail')
    } else if (!emailRegEx.test(email)) {
      errors.push('E-mail введён не верно.')
    };
 
    if (errors.length === 0) {
      setIsEmailValid(true)
    };
    setEmailErrors(errors);
    return errors;
  }

  const validatePassword = () => {
    let errors = [];

    if (password.length === 0) {
      errors.push('Введите пароль.')
    } else if (password.length < 6) {
      errors.push('Пароль должен содержить минимум 6 символов.')
    };
 
    if (errors.length === 0) {
      setIsPasswordValid(true)
    };
    setPasswordErrors(errors);
    return errors;
  }

  const validateForm = () => {
    const validations = [
      validateName(),
      validateEmail(),
      validatePassword()
    ];
    return validations.flat().length === 0;
  };

  const resetNameValidator = () => {
    setNameErrors([]);
    setIsNameValid(false);
  }

  const resetEmailValidator = () => {
    setEmailErrors([]);
    setIsEmailValid(false);
  }

  const resetPasswordValidator = () => {
    setPasswordErrors([]);
    setIsPasswordValid(false);
  }

  const userData = {
    name: name,
    email: email,
    password: password
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setSuccess(true);
      register(userData);

      console.log(userData);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Введите данные для регистрации:</h2>
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <div className={styles.registrationFormInput}>
          <label>Ваше ФИО:</label>
          <input
            className={
              cx(styles.input, 
              {[styles.inputError]: !!nameErrors.length}, 
              {[styles.inputSuccess]: isNameValid})
            }
            type="text"
            name="name"
            placeholder='Имя и фамилия'
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={resetNameValidator}
            onBlur={validateName}
          />
          {(nameErrors.length > 0) && 
          (<div className={styles.errors}>
            {nameErrors}
          </div>)}
        </div>
        <div className={styles.registrationFormInput}>
          <label>E-mail:</label>
          <input
            className={
              cx(styles.input, 
              {[styles.inputError]: !!emailErrors.length}, 
              {[styles.inputSuccess]: isEmailValid})
            }
            type="text"
            name="email"
            placeholder='E-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={resetEmailValidator}
            onBlur={validateEmail}
          />
        </div>
        <div className={styles.registrationFormInput}>
          <label>Ваедите пароль:</label>
          <input 
            className={
              cx(styles.input, 
              {[styles.inputError]: !!passwordErrors.length}, 
              {[styles.inputSuccess]: isPasswordValid})
            }
            type="password"
            name="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={resetPasswordValidator}
            onBlur={validatePassword}
          />
          {(passwordErrors.length > 0) && 
            (<div className={styles.errors}>
              {passwordErrors}
            </div>)}
        </div>
        <div>
          <button type="submit" className={styles.registrationFormBtn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
      </form>
      {success && <Navigate to="/sign-in" replace={true}/>}
    </div>
  );
}

export default RegistrationForm;

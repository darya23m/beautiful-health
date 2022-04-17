import React, { useState } from 'react';

import styles from './SignInForm.module.scss';
import cx from 'classnames';

const SignInForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

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
      validateEmail(),
      validatePassword()
    ];
    return validations.flat().length === 0;
  };

  const resetEmailValidator = () => {
    setEmailErrors([]);
    setIsEmailValid(false);
  }

  const resetPasswordValidator = () => {
    setPasswordErrors([]);
    setIsPasswordValid(false);
  }

  const userData = {
    email: email,
    password: password
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      onSubmit(userData);
      console.log(userData);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Введите данные для авторизации:</h2>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        <div className={styles.signInFormInput}>
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
        <div className={styles.signInFormInput}>
          <label>Ваедите пароль:</label>
          <input 
            className={
              cx(styles.input, 
              {[styles.inputError]: !!passwordErrors.length}, 
              {[styles.inputSuccess]: isPasswordValid})
            }
            type={showPassword ? "text" : "password"}
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
          <input type="checkbox" onChange={() => setShowPassword(!showPassword)}/>Показать пароль
        </div>
        <div>
          <button type="submit" className={styles.signInFormBtn}>ВОЙТИ</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

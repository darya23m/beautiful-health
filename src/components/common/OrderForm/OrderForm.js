import React, { useState } from 'react';

import styles from './OrderForm.module.scss';
import cx from 'classnames';

const OrderForm = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("Безналичный расчет");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isContactValid, setIsContactValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [nameErrors, setNameErrors] = useState([]);
  const [contactErrors, setContactErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);

  const handleChange = (e) => {
    setSelected(e.target.value);
  }
 
  const validateName = () => {
    let errors = [];
    const nameRegEx = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;

    if (name.length === 0) {
      errors.push('Необходимо ввести имя')
    } else if (!nameRegEx.test(name)) {
      errors.push('Используйте, пожалуйста, только буквы')
    };

    if (errors.length === 0) {
      setIsNameValid(true)
    };
    setNameErrors(errors);
    return errors;
  }
 
  const validateContact = () => {
    let errors = [];
    const phoneRegEx = /^[\+]?[0-9\s]{0,4}[(]?[0-9]{2,3}[)]?[-\s0-9]+$/im;
 
    if (contact.length === 0) {
      errors.push('Введите номер телефона')
    } else if (!phoneRegEx.test(contact)) {
      errors.push('Номер телефона введён не верно.')
    };
 
    if (errors.length === 0) {
      setIsContactValid(true)
    };
    setContactErrors(errors);
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

  const validateForm = () => {
    const validations = [
      validateName(),
      validateContact(),
      validateEmail()
    ];
    return validations.flat().length === 0;
  };

  const resetNameValidator = () => {
    setNameErrors([]);
    setIsNameValid(false);
  }

  const resetContactValidator = () => {
    setContactErrors([]);
    setIsContactValid(false);
  }

  const resetEmailValidator = () => {
    setEmailErrors([]);
    setIsEmailValid(false);
  }

  const customerData = {
    name: name,
    contact: contact,
    email: email,
    selected: selected
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      onSuccess(customerData);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Введите данные для заказа:</h2>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <div className={styles.orderFormInput}>
          <label>Ваше имя:</label>
          <input
            className={
              cx(styles.input, 
              {[styles.inputError]: !!nameErrors.length}, 
              {[styles.inputSuccess]: isNameValid})
            }
            type="text"
            name="name"
            placeholder='Имя'
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
        <div className={styles.orderFormInput}>
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
        <div className={styles.orderFormInput}>
          <label>Номер телефона:</label>
          <input 
            className={
              cx(styles.input, 
              {[styles.inputError]: !!contactErrors.length}, 
              {[styles.inputSuccess]: isContactValid})
            }
            type="text"
            name="contact"
            placeholder='Телефон'
            value={contact}
            onChange={e => setContact(e.target.value)}
            onFocus={resetContactValidator}
            onBlur={validateContact}
          />
          {(contactErrors.length > 0) && 
            (<div className={styles.errors}>
              {contactErrors}
            </div>)}
        </div>
        <div className={styles.orderFormSelect}>
          <label>Способ оплаты:</label>
          <select onChange={handleChange}>
            <option value="Безналичный расчет">Безналичный расчет</option>
            <option value="Наличный расчет">Наличный расчет</option>
            <option  value="Наложенный платеж">Наложенный платеж</option>
          </select>
        </div>
        <div>
          <button type="submit" className={styles.orderFormBtn}>Сделать заказ</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;

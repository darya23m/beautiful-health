import React, { useState } from 'react';
import { Link, useSearchParams, Navigate } from 'react-router-dom';
import SignInForm from '../../common/Authentication/SignInForm/SignInForm';
import { useAuthMutation } from '../../../features/users/usersApi';
import { setAccessToken } from '../../../features/auth/utils';

import styles from './SignInPage.module.scss';

const SignInPage = () => {
  const [auth] = useAuthMutation();
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();

  const handleSuccess = (payload) => {
    setAccessToken(payload.accessToken);
    setSuccess(true);
  };
  const handleError = (error) => {
    if (error.originalStatus === 403) {
      alert('wrong email/password');
    } else {
      alert('something went wrong');
    }
  };

  const onSubmit = (data) => {
    auth(data)
      .unwrap()
      .then(handleSuccess)
      .catch(handleError);
  };

  if (success) return (<Navigate to={'/'} replace />);
  console.log(searchParams.get("back"));

  return (
    <div>
      <SignInForm onSubmit={ onSubmit } />
      <div className={styles.regBtnWrapper}>
        <p>Зарегистрируйтесь!</p>
        <Link to='/sign-up' className={styles.regBtn}>Регистрация</Link>
      </div>
    </div>
  )
}

export default SignInPage;

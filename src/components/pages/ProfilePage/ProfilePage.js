import React from 'react';
import styles from './ProfilePage.module.scss';
import { useGetMeQuery } from '../../../features/users/usersApi';

const ProfilePage = () => {
  const { data = [] } = useGetMeQuery();

  console.log(data[0]);

  const renderUserData = () => 
  data.map((user) =>
    <div className={styles.userData}>
      <div className={styles.name}>ФИО: {user.name}</div>
      <div className={styles.email}>E-mail: {user.email}</div>
    </div>
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мой профиль</h1>
      {renderUserData()}
    </div>
  )
}

export default ProfilePage;

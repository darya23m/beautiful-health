import React from 'react';
import styles from './ProfilePage.module.scss';
// import { useGetMeQuery } from '../../../features/users/usersApi';

const ProfilePage = () => {
  // const { data = [] } = useGetMeQuery();

  // console.log(data);

  return (
    <div className={styles.container}>
      <h1>Мой профиль</h1>
    </div>
  )
}

export default ProfilePage;

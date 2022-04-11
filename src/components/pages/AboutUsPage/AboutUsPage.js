import React from 'react';

import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <>
      <h2 className={styles.title}>Beautiful Health - Здоровье и красота всегда в моде!</h2>
      <p className={styles.description}>Хоть раз открыв каталог интернет-магазина Beautiful Health уже не захочется тратить время на походы по торговым центрам – каталог товаров, представленный здесь, превосходит даже смелые ожидания и удовлетворяет любые требования. Добавьте к этому понятный интерфейс, универсальную систему поиска, возможность получить свой заказ на дом в удобное время и вы получите идеальный ресурс, который постоянно совершенствуется.</p>
      <h3 className={styles.subtitle}>Почему выбирают именно нас?</h3>
      <ul className={styles.advantagesList}>
        <li className={styles.advantage}>Оригинальные бренды. Мы сотрудничаем только с официальными поставщиками.</li>
        <li className={styles.advantage}>Доступные цены, которые ниже заявленных в прайсах специализированных торговых точек и бутиках страны.</li>
        <li className={styles.advantage}>Несколько способов доставки по всей Украине – бесплатной независимо от суммы заказа, и без предоплаты.</li>
        <li className={styles.advantage}>Помощь консультантов по любому вопросу.</li>
        <li className={styles.advantage}>Личный кабинет, в котором сохраняется список желаний, история заказов на сайте.</li>
        <li className={styles.advantage}>Индивидуальные email-рассылки с эксклюзивными акциями и предложениями</li>
        <li className={styles.advantage}>Возможность выбрать в категориях масс маркет, миддл маркет, миддл ап, люкс, профессиональная.</li>
        <li className={styles.advantage}>Описание каждого продукта.</li>
      </ul>
    </>
  );
};

export default AboutUsPage;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInfoData } from '../../../features/pages-data/info-actions';

import { Divider, Header, Segment, List } from 'semantic-ui-react'

const InfoPage = () => {
  const dispatch = useDispatch();
  const infoList = useSelector((state) => state.info.infoList);

  useEffect (() => {
    dispatch(fetchInfoData());
  }, [dispatch]);

  const paymentInfoList = infoList.filter((infoPayment) => infoPayment.title === 'Оплата');
  const deliveryInfoList = infoList.filter((infoDelivery) => infoDelivery.title === 'Доставка');

  const renderInfoAboutPayment = () =>
    paymentInfoList.map((info, index) =>
      <List.Item key={index}>
        <List.Content>
          <List.Header style={{color: "#000000"}}>{info.subtitle}</List.Header>
          {info.description.children.text}
        </List.Content>
      </List.Item>
    );

  const renderInfoAboutDelivery = () =>
  deliveryInfoList.map((info, index) =>
    <List.Item key={index}>
      <List.Content>
        <List.Header style={{color: "#000000"}}>{info.subtitle}</List.Header>
        {info.description.children.text}
      </List.Content>
    </List.Item>
  );

  return (
    <Segment>
      <Header as='h3'>Оплата</Header>
      <List divided inverted relaxed>
        {renderInfoAboutPayment()}
      </List>
      <Divider section />

      <Header as='h3'>Доставка</Header>

      <List divided inverted relaxed>
        {renderInfoAboutDelivery()}
      </List>
    </Segment>
  );
}

export default InfoPage;

import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';

import CartQuantity from '../../pages/CartPage/CartQuantity/CartQuantite';
import Logo from '../../../assets/img/HatchfulExport-All/logo.png';
import LongLogo from '../../../assets/img/HatchfulExport-All/long-logo.png';

const AppLayout = () => {

  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={NavLink} to="/" header>
              <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }} />
              Beautiful Health
          </Menu.Item>
          <Menu.Item as={NavLink} to="/cart">
            <i className="shopping cart icon"></i>
            <CartQuantity />
          </Menu.Item>
          <Dropdown item simple text='Каталог'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/catalog" end>Все товары</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/catalog/female">Для Женщин</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/catalog/male">Для Мужчин</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/catalog/children">Для детей</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'>
            <Menu.Item as={NavLink} to="/about-us">О нас</Menu.Item>
            <Menu.Item as={NavLink} to="/info">Доставка и оплата</Menu.Item>
            <Menu.Item as={NavLink} to="/contacts">Контакты</Menu.Item>
            <Menu.Item as={NavLink} to="/orders-list">Ваши заказы</Menu.Item>
            <Menu.Item as={NavLink} to="/profile">Кабинет</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Outlet />
      </Container>

      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Beautiful Health' />
              <List link inverted>
                <List.Item as='a'>О нас</List.Item>
                <List.Item as='a'>Доставка и оплата</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Контакты' />
              <List link inverted>
                <List.Item as='a'>e-mail: shop@shop.sh</List.Item>
                <List.Item as='a'>Тел.: +3 8011111111</List.Item>
                <List.Item as='a'>Тел.: +3 8011111111</List.Item>
                <List.Item as='a'>Тел.: +3 8011111111</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Можете найти нас тут:' />
              <List link inverted>
                <List.Item as='a'>Телеграм</List.Item>
                <List.Item as='a'>Инстаграм</List.Item>
                <List.Item as='a'>Фейсбук</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Image centered size='medium' src={LongLogo} />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default AppLayout;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsData } from '../../../features/pages-data/contacts-actions';

import { Tab } from 'semantic-ui-react';

import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector((state) => state.contacts.contactsList);

  useEffect (() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

  const panes = contactsList.map((contact) => ({
    menuItem: `${contact.title}`,
    render: () => 
    <Tab.Pane>
      <p>{contact.adress.children.text}</p>
      <p>{contact.phone.children.text}</p>
      <p>{contact.worktime.children.text}</p>
    </Tab.Pane>
  }));

  return (
    <div className={styles.container}>
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    </div>
  );
}

export default ContactsPage;

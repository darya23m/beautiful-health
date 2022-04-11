import sanityClient from '../../client';
import { contactsActions } from './contacts-slice';

export const fetchContactsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const data = await sanityClient
      .fetch(`*[_type == "contacts"]{
          title,
          adress[0]{
            children[0]{
              text
            }
          },
          phone[0]{
            children[0]{
              text
            }
          },
          worktime[0]{
            children[0]{
              text
            }
          },
        }`
      )

      console.log(data);

      return data;
    }

    try {
      const cotactsData = await fetchData();
      dispatch(contactsActions.setContactsList({
        contactsList: cotactsData || []
      }));
    } catch (error) {
      alert("Unable to fetch info data!");
      // dispatch(
      //   uiActions.showNotification({
      //     status: 'error',
      //     title: 'Error!',
      //     message: 'Fetching cart data failed!',
      //   })
      // );
    }
  };
};

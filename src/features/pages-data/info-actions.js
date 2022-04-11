import sanityClient from '../../client';
import { infoActions } from './info-slice';

export const fetchInfoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const data = await sanityClient
      .fetch(`*[_type == "info"]{
          title,
          subtitle,
          description[0]{
            children[0]{
              text
            }
          },
        }`
      )

      return data;
    }

    try {
      const infoData = await fetchData();
      dispatch(infoActions.setInfoList({
        infoList: infoData || []
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

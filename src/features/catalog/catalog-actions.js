import { catalogActions } from './catalog-slice';
import sanityClient from '../../client';

export const fetchCatalogData = (category) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const categoryFilter = category ? `&& category->title == "${category}"` : "";
      const data = await sanityClient
      .fetch(
          `*[_type == "product" ${categoryFilter}]{
              id,
              title,
              price,
              category->{
                title
              },
              image{
                asset->{
                  _id,
                  url
                },
              },
            }`
      );

      return data;
    };

    try {
      const catalogData = await fetchData();
      dispatch(catalogActions.setCatalogItems({
        items: catalogData || []
      }));
    } catch (error) {
      alert("Unable to fetch catalog data!");
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

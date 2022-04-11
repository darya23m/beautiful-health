import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalogData } from '../../../features/catalog/catalog-actions';


import Cards from "../../shared/Cards/Cards";

const CatalogPage = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const catalogItems = useSelector((state) => state.catalog.items);

  useEffect (() => {
    dispatch(fetchCatalogData(params.category));
  }, [dispatch, params]);
    
  return (
    <>
      <Cards items={catalogItems} />
    </>
  );
}

export default CatalogPage;

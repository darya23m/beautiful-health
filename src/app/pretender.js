import Pretender from 'pretender';

import catalogPretender from '../features/catalog/pretender';
import ordersPretender from '../features/orders/pretender';
import usersPretender from '../features/users/pretender';

export default () => {
  const server = new Pretender(
    catalogPretender,
    ordersPretender,
    usersPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};

import Pretender from 'pretender';

import catalogPretender from '../features/catalog/pretender';
import ordersPretender from '../features/orders/pretender';

export default () => {
  const server = new Pretender(
    catalogPretender,
    ordersPretender
  );

  server.handledRequest = function handledRequest(verb, path, request) {
    console.info(`[Pretender] ${verb} ${path}`, request);
  };
};

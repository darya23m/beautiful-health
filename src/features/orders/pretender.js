import config from '../../config/app';

let data = [];

export default function () {
  this.get(`${config.API_BASE_URL}/orders`, () => {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)
    ];
  });

  this.post(`${config.API_BASE_URL}/orders`, (req) => {
    const { items, info } = JSON.parse(req.requestBody);
    const order = {
      id: Math.random() * 100000000000000000,
      items,
      info
    };
    data.push(order);
    return [
      201,
      { 'Content-Type': 'application/json' },
      JSON.stringify(order)
    ];
  });
};

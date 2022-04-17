import config from '../../config/app';

let data = [];

const generateToken = length => {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default function () {
  this.get(`${config.API_BASE_URL}/users/me`, (req) => {
    console.log("HEADERS", req.requestHeaders);
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)
    ];
  });

  this.post(`${config.API_BASE_URL}/users`, (req) => {
    const {name, email, password} = JSON.parse(req.requestBody);
    const user = {
      id: Math.random() * 100000000000000000,
      name,
      email,
      password,
      accessToken: generateToken(32)
    };

    data.push(user);

    return [
      201,
      { 'Content-Type': 'application/json' },
      JSON.stringify(user)
    ];
  });

  this.post(`${config.API_BASE_URL}/auth`, (req) => {
    const {email, password} = JSON.parse(req.requestBody);
    const [user] = data.filter((u) => u.email === email && u.password === password)

    if (user) return [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(user)
      ];

    return [
      403,
      {},
      "Forbidden"
    ];
  });
};

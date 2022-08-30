import axios from 'axios';

const sendText = (req, res) => {
  console.log(req.body.body);
  return axios
    .post('https://fast-tor-61669.herokuapp.com/api/notizens', {
      data: {
        notiz: req.body.body,
      },
    })
    .then((results) => {
      res.status(results.status).json(results.data);
    })
    .catch((error) => {
      res.status(error.status).json(error.response.data);
    });
};

export default sendText;

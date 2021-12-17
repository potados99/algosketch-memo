let memo = '아직메모없음!';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    content: memo
  });
});

app.post('/', (req, res) => {
  const {content} = req.body;

  memo = content;

  res.send();
});

app.listen(process.env.PORT);

const express = require('express');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json({ strict: false }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`${port}포트를 리스닝중입니다`);
});

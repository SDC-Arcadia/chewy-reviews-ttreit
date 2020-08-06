const express = require('express');
const app = express();
const PORT = 3007;
const path = require('path')

app.use(express.static(path.join(__dirname, '/../react-client/dist')))

app.get('/', (req, res) => {

})

app.listen(PORT, ()=> {
  console.log(`listening on port http://localhost:${PORT}`);
})
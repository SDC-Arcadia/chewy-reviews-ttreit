const app = require('./index');

const PORT = 3007;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port http://localhost:${PORT}`);
});

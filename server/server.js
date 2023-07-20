const PORT = process.env.PORT || 3000;
const app = require('./app');

try {
  app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
} catch (error) {
  console.log(error);
}

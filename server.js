import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve('dist')));

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

import express, { Request, Response } from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const port = 8080;

let database: any;

(async () => {
  database = await open({
    driver: sqlite3.Database,
    filename: './webshop.sqlite',
  });

  await database.run("PRAGMA foreign_keys = ON;");
  console.log("Ansluten till databas");
})();

app.use(cors());

app.get('/api/shoes', async (req: Request, res: Response) => {
  try {
    const shoes = await database.all('SELECT * FROM shoes');
    res.json(shoes);
  } catch (error) {
    res.status(500).json({ error: 'Kunde inte hämta skor' });
  }
});


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

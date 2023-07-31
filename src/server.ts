import express from 'express';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import { router } from "./routes";
import helmet from 'helmet';

const app = express();

const origins = process.env.ALLOWED_IPS

app.use(
  cors({
    origin: function (origin, callback) {
      if (origins.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error(`Não permitido`))
      }
    }
  },
)
);


app.use(express.json());
app.use(helmet({ crossOriginEmbedderPolicy: false }));
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use("/", (req, res) => {
  return res.json({ message: process.env.MESSAGE });
});

app.use((error, req, res, next) => {
  return res.status(400).send({ error: error.message });
});
//flag-porta
app.listen(3000);

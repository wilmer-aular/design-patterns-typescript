import express, { Express } from 'express';
import path from 'path';
// import apiRouter from './router';
// import webRouter from './router/web';
import bodyParser from 'body-parser';
import cors from 'cors';


export class Server {
  private app: Express;
  constructor(app: Express) {
    this.app = app;

    //this.app.use(express.static(path.resolve('./') + '/public'));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    //this.app.set('view engine', 'ejs');
    this.app.use(cors());

    // this.app.use('/api', apiRouter);
    // this.app.use('/', webRouter);

  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.info(`Server listening on port ${port}!`),
    );
  }
}

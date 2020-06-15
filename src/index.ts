import connection from './connection/database';
import listen from './listen/listen';

connection();

const app = new listen;
app.listen();
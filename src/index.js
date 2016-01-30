import getDate from './date';
import './css/main.scss';

let app = document.createElement('div');
app.className = 'main';

let h1 = document.createElement('h1');
h1.innerHTML = "Hello webpack";


app.appendChild(h1);
app.appendChild(getDate());
document.body.appendChild(app);
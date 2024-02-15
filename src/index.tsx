import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { Root } from './components/Root';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Router>
    <Root />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

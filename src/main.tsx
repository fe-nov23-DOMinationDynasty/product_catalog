import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Root } from './components/Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Root />
  </Router>
);

reportWebVitals();

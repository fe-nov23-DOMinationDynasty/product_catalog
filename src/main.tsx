import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Root } from './components/Root';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
);

reportWebVitals();

import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import { Root } from './components/Root/Root.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Root />
  </Router>
);

reportWebVitals();

import './App.css';
import { Header } from './Components/Header/Header';
import { Content } from './Components/Content';

import { storage } from './Redusers';
import { Provider } from 'react-redux';

function App() {
  
  return (
    <Provider store={storage}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Provider>
  );
}

export default App;

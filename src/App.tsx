import { Provider } from 'react-redux';
import './App.css';
import Calc from './components/Calc';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Calc />
      </Provider>
    </div>
  );
}

export default App;

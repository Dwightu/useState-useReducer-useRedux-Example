import './App.css';
import UseStateExample from './useStateExample/UseStateExample';
import UseReducerExample from './useReducerExample/UseReducerExample';
import ReduxExample from './ReduxExample/ReduxExample';
import store from './ReduxExample/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <UseStateExample />
      <UseReducerExample />
      <Provider store={store}>
          <ReduxExample />
      </Provider>
    </div>
  );
}

export default App;

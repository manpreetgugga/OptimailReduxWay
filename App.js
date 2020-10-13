
import React from 'react'
import CounterComponent from './components/CounterComponent'
import store from './reducers/Index';
import { Provider } from 'react-redux';


const App = () => (
  <Provider store={store}>
  <CounterComponent/>
  </Provider>
)

export default App

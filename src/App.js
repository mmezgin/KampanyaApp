import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Index from './screens/index.jsx'
import Settings from './screens/Settings'
import Products from './screens/Products'
import DateReducer from './Redux/Reducers/Date_Reducer'

const appReducer = combineReducers({
  DateReducer: DateReducer
})
const rootReducer = (state, action) => {
  if (action.type === 'DATA_TRANSFER') {
    state = undefined
  }
  return appReducer(state, action)
}

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

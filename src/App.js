import store from './store/index.js'
import ComA from './pages/comA/index.js'
import ComB from './pages/comB/index.js'
//provider包裹组件，统一维护store
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA />
        <ComB />
      </div>
    </Provider>
  );
}

export default App;

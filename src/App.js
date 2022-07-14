// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigurStore } from './Redux/Store';
import MiniDrawer from './componente/Layout';
import { Route } from 'react-router-dom';
import Counter from './componente/Counter/Counter';
import { Switch } from 'react-router-dom';
import Medicine from './container/Medicine';
import { PersistGate } from 'redux-persist/integration/react'



function App() {

  let {store, persistor} = ConfigurStore()

  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MiniDrawer>
          <Switch>
            <Route exact to path={"/Medicine"} component={Medicine} />
            <Route exact to path={"/Counter"} component={Counter} />
          </Switch>
        </MiniDrawer>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

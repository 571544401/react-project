import React from 'react';
import './App.css';
import { Route,Switch,Redirect } from 'react-router-dom'
import {adminRouter} from './Routes'
import {Frame} from './Components'
const menus = adminRouter.filter(route => route.isNav === true)

function App() {
  return (
    <Frame menus={menus}>
       <Switch>
        {
          adminRouter.map(route => {
            return <Route path={route.pathname} exact={route.exact} render={(routerProps) => {
              return <route.component {...routerProps}/>
            }} />
          })
        }
        <Redirect to={adminRouter[0].pathname} from="/admin" exact/>
        <Redirect to="/404"/>
      </Switch>
    </Frame>
  );
}

export default App;

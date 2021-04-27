import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Custom components. */
import AugmentedReality from './pages/AugmentedReality'

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/augmented-reality' component={AugmentedReality}>
        <AugmentedReality/>
      </Route>
    </Switch>
  </BrowserRouter>

export default App

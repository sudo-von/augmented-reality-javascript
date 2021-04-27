import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/* Custom components. */
import AugmentedReality from './pages/AugmentedReality'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './themes/GlobalStyles'
import { lightTheme, darkTheme } from './themes/Themes'
/* Custom hooks. */
import { useDarkMode } from './themes/useDarkMode'

const App = () => {

 const [ theme, themeToggler ] = useDarkMode()
 const themeMode = theme === 'light' ? lightTheme : darkTheme

 return(
  <ThemeProvider theme={themeMode}>      
  <GlobalStyles/>
    <BrowserRouter>
      <Switch>
        <Route exact path='/augmented-reality' themeToggler={themeToggler}>
          <AugmentedReality/>
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App

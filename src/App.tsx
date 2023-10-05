import { ThemeProvider } from 'styled-components'
import { GlobalStyle, LimitedContainer } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <BrowserRouter>
        <LimitedContainer>
          <Router />
        </LimitedContainer>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

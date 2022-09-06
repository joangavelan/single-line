import { Container } from './components/Layout/Container'
import { Main } from './components/Layout/Main'
import { Sidebar } from './components/Layout/Sidebar'

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  )
}

export default App

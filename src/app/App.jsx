import { Layout } from "./Layout";
import { BrowserRouter } from 'react-router-dom'
import Router from "./Router"

function App() {
  return(
  <BrowserRouter>
    <Layout />
    <Router />
  </BrowserRouter>
  )
}

export default App;

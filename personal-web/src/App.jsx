import NavBar from "./components/NavBar"
import { ThemeProvider } from "./context/ThemeContext"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import "./App.scss";
import Navbar from "./components/navbar/navbar.js"
import Header from "./components/header/header.js"
import Main from "./components/main/main.js"

const App = () => {
  return (
    <div className = "App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App

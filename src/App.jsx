import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import AddContact from "./pages/AddContact"

function App() {
 
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Contact/>}/>
      <Route path="/" element={<Header/>}/>
      <Route path="/add" element={<AddContact/>}/>
     </Routes>
    </>
  )
}

export default App

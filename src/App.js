import Cards from "./components/Cards";
import Header from "./components/Header";
import TodoContainer from "./components/ToDoContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";


function App() 
{
  const [users,setusers] = useState(
    [
        {
            username: "Srimathi",
            password: "123"
        }

    ]
)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
          <Route path="/Signup" element={<Signup users={users} setusers={setusers}/>}></Route>
          <Route path="/Landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

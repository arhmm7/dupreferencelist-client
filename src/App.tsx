import { ThemeProvider } from "@/components/theme-provider"
import {  Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Pricing from "./pages/Pricing"
import { AuthContext } from "./contexts/AuthContext"
import { useState } from "react"
import { Toaster } from 'react-hot-toast';



function App() {

  const [userData , setUserData] = useState('');
  
  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthContext.Provider value={{userData,setUserData}}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </AuthContext.Provider>
     </ThemeProvider>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
     </>
  );
}

export default App
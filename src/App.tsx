import { ThemeProvider } from "@/components/theme-provider"
import {  Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Pricing from "./pages/Pricing"
import Signup from "./pages/Signup"
import { AuthContext } from "./contexts/AuthContext"
import { useEffect, useState } from "react"
import { Toaster } from 'react-hot-toast';
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfUse from "./pages/TermsOfUse"
import ComingSoon from "./pages/ComingSoon"
import NotFound from "./pages/NotFound"
import RefundPolicy from "./pages/RefundPolicy"
import ContactUs from "./pages/ContactUs"
import MyLists from "./pages/MyLists"



function App() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUserData(JSON.parse(user));
      import("axios").then((axios) => {
        axios.default.defaults.headers.common["Authorization"] = token;
      });
    }
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthContext.Provider value={{ userData, setUserData }}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-lists" element={<MyLists/>} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse/>} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/refund-policy" element={<RefundPolicy/>} />
            <Route path="/contact-us" element={<ContactUs/>} />

            <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
        </AuthContext.Provider>
      </ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App

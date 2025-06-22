import { LoginForm } from "@/components/login-form"
import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {



  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

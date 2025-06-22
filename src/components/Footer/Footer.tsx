import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
    <Separator className='mt-7'></Separator>
    <div className='w-[100vw] text-center p-3'>
        <p className="pt-2 pb-2 text-[10px] text-white">© {new Date().getFullYear()} Pinecore. All rights reserved.</p>
    </div>
    <div className="flex text-xs text-gray-300 underline pb-2">
        <Link to="/privacy-policy"><p>Privacy Policy</p></Link>
    </div>
    </>      
  )
}
export default Footer
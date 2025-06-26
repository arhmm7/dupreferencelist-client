import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
    <Separator className='mt-7'></Separator>
    <div className='w-[100vw] text-center p-3'>
        <p className="pt-2 pb-2 text-[10px] text-white">© {new Date().getFullYear()} Pinecore. All rights reserved.</p>
    </div>
    <div className="flex text-xs text-gray-300 underline pb-5">
        <Link to="/privacy-policy"><p className="pr-2 pl-2">Privacy Policy</p></Link>
        <Link to="/terms-of-use"><p className="pr-2 pl-2">Terms of Use </p></Link>
        <Link to="/refund-policy"><p className="pr-2 pl-2">Refund Policy</p></Link>
        <Link to="/contact-us"><p className="pr-2 pl-2">Contact Us</p></Link>
    </div>
    </>      
  )
}
export default Footer
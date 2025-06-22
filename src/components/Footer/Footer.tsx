import React from 'react'
import { Separator } from "@/components/ui/separator"

function Footer() {
  return (
    <>
    <Separator className='mt-7'></Separator>
    <div className='w-[100vw] text-center p-3'>
        <p className="pt-2 pb-2 text-[10px] text-white">© {new Date().getFullYear()} Pinecore. All rights reserved.</p>
    </div>
    </>      
  )
}
export default Footer
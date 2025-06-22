import React from 'react'

import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

function Home() {
  return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-2">
            <Navigation></Navigation>
            </div>

            <Carousel className='pt-10'>
            <CarouselContent className='w-[200px] lg:w-[300px]'>
                <CarouselItem className="basis-full">
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/49/0d/8d/490d8d87ea76f27d6b0ec7fb172b422b.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full" >
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/55/fe/45/55fe4541375dcc657803ebf87f02ae96.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full">
                     <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/60/8c/3f/608c3fb768ba4888a8cd66b03e581724.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full">
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/d4/b3/ea/d4b3ea1c03074ab544ddbb2fe626c390.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full" >
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/cd/f0/3e/cdf03ec3e750db9fa08cb82bd6bea7fb.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full">
                     <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/20/5d/81/205d81cf3f52676accf9973f1dc83e7e.jpg"></img>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

            <Link to='/dashboard'><Button className='pr-7 pl-7 pt-5 pb-5 m-7'>Get Started</Button></Link>


            <div className="w-[90vw] lg:h-[30vh] h-[20vh] flex flex-col justify-center items-center p-2">
            <h1 className='text-4xl lg:text-6xl  font-sans '>
                one list.<br/> one shot.
            </h1>   
            </div>

            <div className='lg:w-[40vw] w-[90vw]'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How does it work?</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl mauris, commodo ut rhoncus vel, malesuada non augue. Nulla facilisi. In dignissim justo id massa scelerisque, vel aliquet lorem feugiat. Maecenas augue lectus, sodales id condimentum vel, facilisis eget metus. Nam et tortor in purus tempor dictum et at odio. Donec suscipit odio sed diam molestie tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium tincidunt est, sed blandit velit venenatis non. Integer consectetur nisi in commodo cursus. Phasellus porta purus eu posuere molestie. Maecenas a gravida turpis, nec iaculis massa. Nullam ac egestas arcu. Aliquam erat volutpat. Nunc elementum elit a ultrices blandit. Nullam consectetur magna eu urna eleifend feugiat. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>About me</AccordionTrigger>
                        <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl mauris, commodo ut rhoncus vel, malesuada non augue. Nulla facilisi. In dignissim justo id massa scelerisque, vel aliquet lorem feugiat. Maecenas augue lectus, sodales id condimentum vel, facilisis eget metus. Nam et tortor in purus tempor dictum et at odio. Donec suscipit odio sed diam molestie tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium tincidunt est, sed blandit velit venenatis non. Integer consectetur nisi in commodo cursus. Phasellus porta purus eu posuere molestie. Maecenas a gravida turpis, nec iaculis massa. Nullam ac egestas arcu. Aliquam erat volutpat. Nunc elementum elit a ultrices blandit. Nullam consectetur magna eu urna eleifend feugiat. 
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default Home

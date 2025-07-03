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
import Countdown from '../components/CountDown'
import { Table ,    TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function Home() {
  return (
    <>
        <Countdown/>
        <div className="flex flex-col justify-center items-center bg-gradient-to-b  from-[#160216] via-[#000000] to-[#020a19]">
            
            <div className="flex flex-col justify-center items-center p-2">
            <Navigation></Navigation>
            </div>

            <div className="w-[90vw] text-center lg:h-[30vh] h-[20vh] flex flex-col justify-center items-center p-2">

            <div className="inline-block text-center">
                <h1
                    className="relative text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]"
                    style={{ fontFamily: 'Poppins, sans-serif'}}
                >
                    Delhi University <br /> Preference List <br /> Builder
                </h1>
            </div>

            
            </div>

            <Carousel className='pt-10'>
            <CarouselContent className='w-[200px] lg:w-[1000px]'>
                <CarouselItem className="basis-full lg:basis-1/3">
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/49/0d/8d/490d8d87ea76f27d6b0ec7fb172b422b.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/3" >
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/55/fe/45/55fe4541375dcc657803ebf87f02ae96.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/3 ">
                     <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/60/8c/3f/608c3fb768ba4888a8cd66b03e581724.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/3">
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/d4/b3/ea/d4b3ea1c03074ab544ddbb2fe626c390.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/3" >
                    <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/cd/f0/3e/cdf03ec3e750db9fa08cb82bd6bea7fb.jpg"></img>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/3">
                     <img className="w-[200px] h-[266px] lg:w-[300px] lg:h-[400px] rounded-lg" src="https://i.pinimg.com/736x/20/5d/81/205d81cf3f52676accf9973f1dc83e7e.jpg"></img>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

            <Link to='/dashboard'>
                <Button className='pr-7 pl-7 pt-5 pb-5 m-7 bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]'>
                Get Started
                </Button>
            </Link>

            <div className="w-[90vw] text-center flex flex-col justify-center items-center p-2 relative">

            <div className="relative w-full">
            <Table>
            <TableCaption>Get your Personalised Preference List Now</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">S.No.</TableHead>
                <TableHead>College</TableHead>
                <TableHead>Course</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[
                { college: "Shri Ram College of Commerce (SRCC)", course: "B.Com (Hons)" },
                { college: "Hansraj College", course: "B.Com (Hons)" },
                { college: "Hindu College", course: "B.Com (Hons)" },
                { college: "Sri Venkateswara College", course: "B.Com (Hons)" },
                { college: "Shaheed Bhagat Singh College", course: "B.Com (Hons)" },
                { college: "Ramjas College", course: "B.Com (Hons)" },
                { college: "Delhi College of Arts and Commerce", course: "B.Com (Hons)" },
                { college: "Kirori Mal College", course: "B.Com (Hons)" },
                { college: "Daulat Ram College", course: "B.Com (Hons)" },
                { college: "Jesus and Mary College", course: "B.Com (Hons)" }
                ]
                .map((item, i) => {
                let styleClass = '';
                if (i < 3) {
                    styleClass = 'blur-none opacity-80';
                } else {
                    styleClass = 'blur-[4px] opacity-50';
                }

                return (
                    <TableRow key={i} className={styleClass}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell>{item.college}</TableCell>
                    <TableCell>{item.course}</TableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>



                <Link to="/dashboard">
                <Button className="absolute inset-0 m-auto w-fit h-fit z-10 bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]">
                    Build your <br/> Personalised Preference List Now!
                </Button>
                </Link>
            </div>

            </div>


            <div className="w-[90vw] lg:h-[30vh] h-[20vh] flex flex-col justify-center items-center p-2">

                <div className="relative inline-block text-center">
                <h1
                    className="relative text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]"
                    style={{ fontFamily: 'Poppins, sans-serif'}}
                >
                    One List. <br/> One Shot.
                </h1>
            </div>

            </div>

            <div className='lg:w-[40vw] w-[90vw]'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How does it work?</AccordionTrigger>
                        <AccordionContent>
                            How It Works

                            Creating your DU preference list has never been this simple.
                            Here’s how the tool works:

                            <br></br> 1.&nbsp;&nbsp;&nbsp;Register on the Website
                            Sign up on dupreferencelist.in to begin your personalized preference-building journey.
                            
                            <br></br> 2.&nbsp;&nbsp;&nbsp;Select Your Course Preferences
                            Choose one or multiple courses you’re interested in. These could be anything from B.Com (Hons) to BA (Hons) Political Science.

                            <br></br> 3.&nbsp;&nbsp;&nbsp;Select Your College Preferences
                            Pick the colleges you're considering — again, you can select as many as you like.

                            <br></br> 4.&nbsp;&nbsp;&nbsp;Set Your Priority
                            Use our unique priority slider to tell us what matters more to you:

                            Slide towards college if you prioritize campus, location, or college reputation.

                            Slide towards course if academic strength and department quality are your top concern.

                            You can also set a balanced approach by adjusting the bar somewhere in between.

                            <br></br> 5.&nbsp;&nbsp;&nbsp;Make a Small Payment
                            Complete a nominal payment through our secure payment gateway to unlock your results.

                            <br></br> 6.&nbsp;&nbsp;&nbsp;Get Your Curated Preference List
                            Based on your inputs and our research-backed algorithm, you’ll receive a customized and optimized preference list — made just for you, ready to upload on the CSAS portal.
                                                    
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>About Us</AccordionTrigger>
                        <AccordionContent>
                            dupreferencelist.in is a student-built initiative proudly owned and operated by Pinecore, a collective of students pursuing diverse fields like technology, management, and data science. As Delhi University students and aspirants ourselves, we deeply understand how confusing and overwhelming the CSAS preference-filling process can be.
                            That’s why we’ve come together to build a curated, easy-to-use tool designed to make the DU admissions journey simpler, smarter, and more strategic.
                            At the core of our platform is one mission:
                            To help DU aspirants create a personalized, well-ordered preference list based on what matters most to them — course quality, college reputation, or both.
                            We’ve combined real insights, department-wise rankings, and student feedback to build a tool that takes the guesswork out of preference-filling — giving you clarity, confidence, and control over your choices.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Footer></Footer>
        </div>
        </>
  )
}

export default Home

import { useContext, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Slider } from "@/components/ui/slider"

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FiPlus, FiLogOut, FiLayers } from "react-icons/fi"
import Footer from '@/components/Footer/Footer'
import AutoCompleteInput from '@/components/AutoCompleteInput/AutoCompleteInput'
import { Separator } from "@/components/ui/separator"
import toast from 'react-hot-toast'
import { AuthContext } from '@/contexts/AuthContext'

function Dashboard() {
  const [college, setCollege] = useState("")
  const [course, setCourse] = useState("")
  const [collegeList, setCollegeList] = useState<string[]>([])
  const [courseList, setCourseList] = useState<string[]>([])

const collegeOptions = [
  "Sri Ram College of Commerce (SRCC)",
  "Hansraj College",
  "St. Stephen's College",
  "Hindu College",
  "Lady Shri Ram College for Women (LSR)",
  "Miranda House",
  "Ramjas College",
  "Kirori Mal College",
  "Sri Venkateswara College",
  "Indraprastha College for Women",
  "Daulat Ram College",
  "Shaheed Bhagat Singh College",
  "Shaheed Rajguru College of Applied Sciences for Women",
  "Gargi College",
  "Jesus and Mary College",
  "Kamala Nehru College",
  "Maitreyi College",
  "Mata Sundri College for Women",
  "Delhi College of Arts and Commerce",
  "Sri Guru Tegh Bahadur Khalsa College",
  "Sri Guru Gobind Singh College of Commerce",
  "Sri Aurobindo College",
  "Dyal Singh College",
  "Acharya Narendra Dev College",
  "Aryabhatta College",
  "Bhaskaracharya College of Applied Sciences",
  "Bharati College",
  "Deshbandhu College",
  "Kalindi College",
  "Lakshmibai College",
  "P.G.D.A.V. College",
  "Rajdhani College",
  "Satyawati College",
  "Shivaji College",
  "Shyam Lal College",
  "Vivekananda College",
  "Zakir Husain Delhi College",
  "Swami Shraddhanand College",
  "Motilal Nehru College",
  "Rajguru College of Applied Sciences",
  "Aditi Mahavidyalaya",
  "Bhagini Nivedita College",
  "Keshav Mahavidyalaya",
  "Deen Dayal Upadhyaya College",
  "Institute of Home Economics",
  "Cluster Innovation Centre (CIC)",
  "School of Open Learning (SOL)",
  "Non-Collegiate Women's Education Board (NCWEB)"
];

const courseOptions = [
  "BCom (Hons)",
  "BCom (Programme)",
  "BBA Financial Investment Analysis (BBA FIA)",
  "Bachelor of Management Studies (BMS)",
  "BA (Hons) Political Science",
  "BA (Hons) Economics",
  "BA (Hons) English",
  "BA (Hons) Hindi",
  "BA (Hons) History",
  "BA (Hons) Philosophy",
  "BA (Hons) Psychology",
  "BA (Hons) Sociology",
  "BA (Hons) Sanskrit",
  "BA (Hons) Urdu",
  "BA (Hons) Arabic",
  "BA (Hons) Persian",
  "BA (Hons) Punjabi",
  "BA (Hons) Applied Psychology",
  "BSc (Hons) Physics",
  "BSc (Hons) Chemistry",
  "BSc (Hons) Mathematics",
  "BSc (Hons) Statistics",
  "BSc (Hons) Botany",
  "BSc (Hons) Zoology",
  "BSc (Hons) Anthropology",
  "BSc (Hons) Computer Science",
  "BSc (Hons) Electronics",
  "BSc (Hons) Biomedical Sciences",
  "BSc (Hons) Home Science",
  "BSc (Programme) Life Sciences",
  "BSc (Programme) Physical Sciences",
  "BSc (Programme) Applied Physical Sciences",
  "BSc (Programme) Mathematical Sciences",
  "BSc (Programme) Industrial Chemistry",
  "Bachelor of Elementary Education (B.El.Ed)",
  "Bachelor of Arts (Hons) Journalism",
  "Bachelor of Fine Arts (BFA)",
  "BTech Information Technology and Mathematical Innovations",
  "BA (Hons) Multimedia and Mass Communication (BMMMC)",
  "Bachelor of Business Economics (BBE)",
  "Bachelor of Vocational Studies (B.Voc)"
];


  const {userData} = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      toast.error("Please login to continue");
      navigate("/login"); 
    }
  }, [userData]);
  
  const [showList,setShowList] = useState(false);

  const generateList = () => {
    toast.loading('Generating Preference List');
    setShowList(true);
    
  }



  return (
    <>
      <div className='w-full p-6 flex flex-col items-center'>
        <div className='pb-3'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to='/'>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to='/pricing'>Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://i.pinimg.com/736x/67/03/9a/67039af73fae67ad98ab22c9436fca02.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='w-[200px]'>
                    <li>
                      <NavigationMenuLink className='flex items-center' asChild>
                        <Link to='/login' className='flex flex-row'><FiLayers className='mr-2' /> My Lists</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink className='flex items-center' asChild>
                        <Link to='/' className='flex flex-row'><FiLogOut className='mr-2' /> Logout</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        <div className='w-[95vw] lg:w-[40vw]'>
          <Card>
            <CardHeader>
              <CardTitle>Enter Preferences</CardTitle>
              <CardDescription>Enter College & Course Preferences to Generate List</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='my-2'>
                <Label htmlFor="college" className='py-2'>Enter College</Label>
                <div className="flex items-center gap-2">
                  <AutoCompleteInput
                    options={collegeOptions}
                    value={college}
                    setValue={setCollege}
                    onSelect={(val) => setCollege(val)}
                    placeholder="Enter College Name"
                  />
                  <Button
                    onClick={() => {
                      if (college && !collegeList.includes(college)) {
                        setCollegeList([...collegeList, college])
                        setCollege("")
                      }
                    }}
                  >
                    <FiPlus />
                  </Button>
                </div>
              </div>

              <Table>
                <TableCaption>Your College Preferences</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">S. No.</TableHead>
                    <TableHead>College</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {collegeList.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{idx + 1}</TableCell>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className='my-2'>
                <Label htmlFor="course" className='py-2'>Enter Course</Label>
                <div className="flex items-center gap-2">
                  <AutoCompleteInput
                    options={courseOptions}
                    value={course}
                    setValue={setCourse}
                    onSelect={(val) => setCourse(val)}
                    placeholder="Enter Course Name"
                  />
                  <Button
                    onClick={() => {
                      if (course && !courseList.includes(course)) {
                        setCourseList([...courseList, course])
                        setCourse("")
                      }
                    }}
                  >
                    <FiPlus />
                  </Button>
                </div>
              </div>
              <Table>
                <TableCaption>Your Course Preferences</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">S. No.</TableHead>
                    <TableHead>Course</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseList.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{idx + 1}</TableCell>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className='flex'>
                <p className='p-5'>College</p>
                <Slider defaultValue={[0]} max={100} step={100}/> 
                <p className='p-5'>Course</p>
              </div>
              <div className='text-center'>
                Prioritize College or Course
              </div>

            
            </CardContent>
            <Button className='sm:ml-70 sm:mr-10 mr-20 ml-20' onClick={generateList}>Generate</Button>

          </Card>

          <Separator className='my-10'/>

            <div className={`m-10 ${showList ? 'block' : 'hidden'}`}>
            <h1>
              Your Personalised Preference List
            </h1>

           <Table >
          <TableCaption>Shush. here is your preference list</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No.</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Course</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className={`${showList ? 'blur' : ''}`}>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Shri Ram College of Commerce</TableCell>
              <TableCell>BCom (Hons)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>  
    

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard

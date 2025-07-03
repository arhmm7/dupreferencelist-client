import { useContext, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


declare global {
  interface Window {
    Razorpay: any;
  }
}


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
  "Acharya Narendra Dev College",
  "Aditi Mahavidyalaya (W)",
  "Aryabhatta College",
  "Atma Ram Sanatan Dharma College",
  "Bhagini Nivedita College",
  "Bharati College",
  "Bhaskaracharya College of Applied Sciences",
  "College of Vocational Studies",
  "Cluster Innovation Centre",
  "Daulat Ram College",
  "Deen Dayal Upadhyaya College",
  "Delhi College of Arts & Commerce",
  "Deshbandhu College",
  "Department of German and Romance Studies",
  "Dr. Bhim Rao Ambedkar College",
  "Dyal Singh College",
  "Dyal Singh Evening College",
  "Gargi College",
  "Hansraj College",
  "Hindu College",
  "Indraprastha College for Women",
  "Institute of Home Economics",
  "Janki Devi Memorial College",
  "Jesus and Mary College",
  "Kalindi College",
  "Kamala Nehru College",
  "Keshav Mahavidyalaya",
  "Kirori Mal College",
  "Lady Irwin College",
  "Lady Shri Ram College for Women",
  "Lakshmibai College",
  "Maharaja Agrasen College",
  "Maitreyi College",
  "Mata Sundri College for Women",
  "Miranda House",
  "Motilal Nehru College (Day)",
  "Motilal Nehru College (Evening)",
  "PGDAV College (Day)",
  "PGDAV College (Evening)",
  "Rajdhani College",
  "Ram Lal Anand College",
  "Ramanujan College",
  "Ramjas College",
  "Satyawati College (Day)",
  "Satyawati College (Evening)",
  "Shaheed Bhagat Singh College (Day)",
  "Shaheed Bhagat Singh Evening College",
  "Shaheed Rajguru College of Applied Sciences for Women",
  "Shaheed Sukhdev College of Business Studies",
  "Shivaji College",
  "Shri Ram College of Commerce",
  "Shyam Lal College",
  "Shyam Lal College (Evening)",
  "Shyama Prasad Mukherji College (for Women)",
  "Sri Aurobindo College (Day)",
  "Sri Aurobindo College (Eve.)",
  "Sri Guru Gobind Singh College of Commerce",
  "Sri Guru Nanak Dev Khalsa College",
  "Sri Guru Tegh Bahadur Khalsa College",
  "Sri Venkateswara College",
  "St. Stephen's College",
  "Swami Shraddhanand College",
  "Vivekananda College",
  "Zakir Husain Delhi College (Day)",
  "Zakir Husain Delhi College (Evening)",
  "Delhi School of Journalism",
  "Indira Gandhi Institute of Physical Education and Sports Sciences"
];


const courseOptions = [
  "B.Com. (Hons.)",
  "B.Com. (Prog.)",
  "B.Sc. (Hons.) Physics",
  "B.Sc. (Hons.) Chemistry",
  "B.Sc. (Hons.) Mathematics",
  "B.Sc. (Hons.) Electronics",
  "B.Sc. (Hons.) Computer Science",
  "B.Sc. (Hons.) Statistics",
  "B.Sc. (Hons.) Instrumentation",
  "B.Sc. (Hons.) Geology",
  "B.Sc. (Hons.) Environmental Science",
  "B.Sc. (Hons.) Biomedical Science",
  "B.Sc. (Hons.) Botany",
  "B.Sc. (Hons.) Zoology",
  "B.Sc. (Hons.) Microbiology",
  "B.Sc. (Hons.) Biochemistry",
  "B.Sc. (Hons.) Food Technology",
  "B.Sc. (Hons.) Polymer Science",
  "B.Sc. (Hons.) Home Science",
  "B.Sc. (Hons.) Psychology",
  "B.Sc. (Prog.) Life Sciences",
  "B.Sc. (Prog.) Physical Science (Chemistry/Computer Science/Electronics)",
  "B.Sc. (Prog.) Mathematical Science",
  "B.Sc. (Prog.) Applied Physical Science (Industrial Chemistry)",
  "B.A. (Hons.) Economics",
  "B.A. (Hons.) Business Economics",
  "B.A. (Hons.) English",
  "B.A. (Hons.) Hindi",
  "B.A. (Hons.) History",
  "B.A. (Hons.) Political Science",
  "B.A. (Hons.) Psychology",
  "B.A. (Hons.) Sociology",
  "B.A. (Hons.) Sanskrit",
  "B.A. (Hons.) Philosophy",
  "B.A. (Hons.) Geography",
  "B.A. (Hons.) Journalism",
  "B.A. (Hons.) Social Work",
  "B.A. (Hons.) Music",
  "B.A. (Hons.) Urdu",
  "B.A. (Hons.) Punjabi",
  "B.A. (Hons.) French",
  "B.A. (Hons.) German",
  "B.A. (Hons.) Spanish",
  "B.A. (Hons.) Italian",
  "B.A. (Prog.)",
  "B.A. (VS)",
  "Bachelor of Management Studies (BMS)",
  "Bachelor of Business Administration (Financial Investment Analysis) – BBA(FIA)",
  "Bachelor of Elementary Education (B.El.Ed.)",
  "Bachelor of Technology (B.Tech.) – IT & Mathematical Innovations",
  "B.Voc. Healthcare Management",
  "B.Voc. Retail Management & IT",
  "B.Voc. Software Development",
  "B.Voc. Banking Operations",
  "B.Voc. Web Designing",
  "Five-Year Integrated Programme in Journalism",
  "B.Sc. in Physical Education, Health Education & Sports (B.Sc. PE, HE & S)"
];




  const {userData,setUserData} = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      toast.error("Please login to continue");
      navigate("/login");
    }
  }, [userData, navigate]);

  const [isProcessing, setIsProcessing] = useState(false);

  
  const [showList,setShowList] = useState(false);
  type PreferenceItem = {
    rank: string;
    college: string;
    course: string;
  };

  const [list, setList] = useState<PreferenceItem[]>([]);

const generateList = async () => {

  if(isProcessing) return;
  setIsProcessing(true);

  if (courseList.length === 0) {
    toast.error("Please add at least one course");
    setIsProcessing(false);
    return;
  }

  if (courseList.length > 5) {
    toast.error("You can select up to 5 courses only");
    setIsProcessing(false);
    return;
  }


  toast.loading("Processing Payment...");

  try {
    const orderRes = await fetch(import.meta.env.VITE_BACKEND+"payment/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        amount: 199,
        user_id: userData?.id,
      }),
    });

    const orderData = await orderRes.json();
    if (!orderRes.ok) {
      toast.dismiss();
      toast.error(orderData.message || "Failed to create payment order");
      return;
    }
    toast.dismiss();
    toast.success("Payment Created");


    const { id: razorpay_order_id, amount } = orderData;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount,
      currency: "INR",
      name: "DU Preference Generator",
      description: "Preference List Access",
      order_id: razorpay_order_id,
      handler: async function (response: any) {
        toast.loading("Verifying Payment...");

        const verifyRes = await fetch(import.meta.env.VITE_BACKEND+"payment/verifyPayment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            user_id: userData?.id,
            amount: amount / 100,
          }),
        });

        const verifyData = await verifyRes.json();
        if (!verifyRes.ok) {
          toast.dismiss();
          toast.error(verifyData.message || "Payment verification failed");
          return;
        }
        toast.dismiss();
        toast.success("Payment Verified");

        toast.loading("Generating List...");
        const genRes = await fetch(import.meta.env.VITE_BACKEND+"api/generateList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            preferredCourses: courseList,
            preferredColleges: collegeList,
            razorpay_order_id,
          }),
        });

        const data = await genRes.json();
        toast.dismiss();

        if (!genRes.ok) {
          toast.error(data.message || "Failed to generate list");
          console.log(data.raw || data.error);
          return;
        }
        toast.dismiss();
        toast.success("List Generated!");
        setList(data.list);
        setShowList(true);
      },
      theme: {
        color: "#0d9488",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    toast.dismiss();
    toast.error("Something went wrong");
    console.error(err);
  }
  setIsProcessing(false);
};

const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(40);
  doc.text("DU Preference List", 14, 22);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text("Generated Preference Order", 14, 30);

  doc.setFontSize(10);
  doc.setTextColor(150);
  doc.text("Generated using dupreferencelist.in", 14, 36);

  const tableData = list.map((item, index) => [
    index + 1,
    item.college,
    item.course,
  ]);

  autoTable(doc, {
    head: [["S.No.", "College", "Course"]],
    body: tableData,
    startY: 42,
    theme: "grid",
    headStyles: {
      fillColor: [33, 33, 33],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 12,
    },
    bodyStyles: {
      fontSize: 11,
      textColor: [50, 50, 50],
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245],
    },
    columnStyles: {
      0: { cellWidth: 20, halign: "center" },
      1: { cellWidth: 80 },
      2: { cellWidth: 80 },
    },
    styles: {
      cellPadding: 4,
      font: "helvetica",
      lineColor: [220, 220, 220],
      lineWidth: 0.2,
    },
    margin: { top: 42, left: 14, right: 14 },
  });

  doc.save("DU_Preference_List.pdf");
};



  const logout = () => {
    setUserData(null);
    localStorage.removeItem("token"); 
  };
  
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
                    <AvatarImage src="https://i.pinimg.com/736x/76/6d/ea/766deaf4d28044a4bd09c9d8ef3f9406.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='w-[200px]'>
                    <li>
                      <NavigationMenuLink className='flex items-center' asChild>
                        <Link to='/my-lists' className='flex flex-row'><FiLayers className='mr-2' /> My Lists</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink className='flex items-center' asChild>
                        <Link to='/' onClick={logout} className='flex flex-row'><FiLogOut className='mr-2' /> Logout</Link>
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
                    disabled={courseList.length >= 5}
                    onClick={() => {
                      if (course && !courseList.includes(course)) {
                        setCourseList([...courseList, course]);
                        setCourse("");
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

            
            </CardContent>
            <Button className='sm:ml-70 sm:mr-10 mr-20 ml-20' disabled={isProcessing}   onClick={generateList}>Generate</Button>

          </Card>

          <Separator className='my-10'/>

           <div className={`m-10 ${showList ? 'block' : 'hidden'}`}>
            <h1 className='text-xl font-semibold mb-4'>
              Your Personalised Preference List
            </h1>

              <Table>
                <TableCaption>You will be able to access this under my lists</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">S.No.</TableHead>
                    <TableHead>College</TableHead>
                    <TableHead>Course</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {list.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3}>No results yet</TableCell>
                    </TableRow>
                  ) : (
                    list.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.rank || index + 1}</TableCell>
                        <TableCell>{item.college}</TableCell>
                        <TableCell>{item.course}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            {list.length > 0 && (
              <Button className="mt-4" onClick={downloadPDF}>
                Download as PDF
              </Button>
            )}

          </div>

    

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type PreferenceItem = {
  rank: string;
  college: string;
  course: string;
};

type UserList = {
  id: number;
  razorpay_order_id: string;
  created_at: string;
  preference_list: PreferenceItem[];
};

function MyLists() {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [lists, setLists] = useState<UserList[]>([]);
  const [selectedList, setSelectedList] = useState<PreferenceItem[] | null>(null);

  useEffect(() => {
    if (!userData) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }


    const fetchLists = async () => {
      try {
        const rawToken = localStorage.getItem("token");
        const token = rawToken?.startsWith("Bearer ") ? rawToken : `Bearer ${rawToken}`;

        const res = await fetch(import.meta.env.VITE_BACKEND+"api/lists", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({}),
        });


        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`Failed to fetch lists: ${res.status} - ${errText}`);
        }

        const data = await res.json();
        console.log("Fetched lists:", data);
        setLists(data);
      } catch (err: any) {
        console.error("Fetch error:", err);
        toast.error("Failed to load your lists");
      }
    };

    fetchLists();
  }, [userData, navigate]);
const downloadPDF = (list: PreferenceItem[], orderId: string) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text("DU Preference List", 14, 22);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text(`Order ID: ${orderId}`, 14, 30);


  const tableData = list.map((item, idx) => [
    item.rank || (idx + 1).toString(),
    item.college,
    item.course,
  ]);

  autoTable(doc, {
    head: [["Rank", "College", "Course"]],
    body: tableData,
    startY: 40,
    headStyles: {
      fillColor: [241, 245, 249],
      textColor: [15, 23, 42], 
      fontSize: 11,
      fontStyle: 'bold',
      halign: 'center',
    },
    bodyStyles: {
      fontSize: 10,
      textColor: [30, 41, 59], 
      cellPadding: 3,
    },
    alternateRowStyles: {
      fillColor: [250, 250, 250],
    },
    styles: {
      lineColor: [226, 232, 240], 
      lineWidth: 0.1,
    },
    theme: 'grid',
  });

  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184); 
  doc.text(
    "Generated using dupreferencelist.in",
    14,
    doc.internal.pageSize.getHeight() - 10
  );

  doc.save(`DU_Preference_List_${orderId}.pdf`);
};


  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">My Preference Lists</CardTitle>
        </CardHeader>
        <CardContent>
          <Separator className="mb-4" />
          {lists.length === 0 ? (
            <p className="text-muted-foreground">No lists generated yet.</p>
          ) : (
            <Table>
              <TableCaption>Your generated preference lists</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>S.No.</TableHead>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lists.map((list, idx) => (
                  <TableRow key={list.id}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell className="max-w-xs truncate">{list.razorpay_order_id}</TableCell>
                    <TableCell>{new Date(list.created_at).toLocaleString()}</TableCell>
                    <TableCell>
                      {Array.isArray(list.preference_list) && list.preference_list.length > 0 ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              onClick={() => setSelectedList(list.preference_list)}
                              variant="secondary"
                            >
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Preference List</DialogTitle>
                            </DialogHeader>

                            <div className="flex justify-end mb-4">
                              <Button
                                onClick={() =>
                                  downloadPDF(list.preference_list, list.razorpay_order_id)
                                }
                                variant="outline"
                              >
                                Download as PDF
                              </Button>
                            </div>

                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Rank</TableHead>
                                  <TableHead>College</TableHead>
                                  <TableHead>Course</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {selectedList?.map((item, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell>{item.rank}</TableCell>
                                    <TableCell>{item.college}</TableCell>
                                    <TableCell>{item.course}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <span className="text-sm text-muted-foreground">No list</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default MyLists;

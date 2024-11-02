import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"


const creaters = [
  {
    prfImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Danish",
    eventsCount: "5",
    location:"Karachi"
  },
  {
    prfImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Haris",
    eventsCount: "5",
    location:"Karachi"
  },
  {
    prfImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Haseeb",
    eventsCount: "5",
    location:"Karachi"
  },
  {
    prfImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Hasnain",
    eventsCount: "5",
    location:"Karachi"
  },
  {
    prfImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullname: "Rao,s Family",
    eventsCount: "5",
    location:"Karachi"
  },
]


export default function Users() {
  return (
      <div className=" min-h-screen ">
          <h1 className=" font-bold text-3xl p-6 text-center ">Users</h1>
<Table className=" m-auto ">
      <TableCaption>A list of your recent Events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>FullName</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">EventsCount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {creaters.map((user) => (
          <TableRow key={user.fullname}>
            <TableCell className="font-medium">
              <img src={user.prfImage} height={40} width={40} className=" rounded "/>
            </TableCell>
            <TableCell>{user.fullname}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell className="text-right">{user.eventsCount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  


      </div>
  );
}

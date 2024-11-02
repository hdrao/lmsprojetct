// import Image from "next/image";

// export default function Events() {
//   return (
//       <div className=" min-h-screen  ">

//         <h1 className=" font-bold text-3xl p-20 text-center ">Events</h1>

//       </div>
//   );
// }



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
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    Date: new Date().toLocaleDateString(),
    location:"Karachi",
    description: "Birthday Event of a baby girl"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    Date: new Date().toLocaleDateString(),
    location:"Karachi",
    description: "Birthday Event of a baby girl"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    Date: new Date().toLocaleDateString(),
    location:"Karachi",
    description: "Birthday Event of a baby girl"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    Date: new Date().toLocaleDateString(),
    location:"Karachi",
    description: "Birthday Event of a baby girl"
  },
]


export default function Events() {
  return (
      <div className=" min-h-screen ">
           <h1 className=" font-bold text-3xl p-6 text-center ">Events</h1>
<Table className=" m-auto ">
      <TableCaption>A list of your recent Events</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {creaters.map((user) => (
          <TableRow key={user.fullname}>
            <TableCell className="font-medium">
              <img src={user.thumbnail} height={40} width={40} className=" rounded "/>
            </TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.description}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell className="text-right">{user.Date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  


      </div>
  );
}

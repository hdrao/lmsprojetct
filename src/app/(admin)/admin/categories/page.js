
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
import { Button } from "@/components/ui/button";
import { AddCategory } from "@/components/AddCategory/addcategory";


const categories = [

  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday",
    description: "All Birthday Events"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    description: "Birthday Event of a baby girl"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    description: "Birthday Event of a baby girl"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Birthday Event",
    description: "All Wedding Event "
  },
]


export default function Categories() {
  return (
      <div className=" min-h-screen container mx-auto mt-5 ">
        <div className=" flex justify-between items-center ">
          <h1 className=" font-semibold ">Categories</h1>
          <AddCategory />
        </div>
<Table className=" m-auto ">
      <TableCaption>A list of your Categories</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category,index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <img src={category.thumbnail} height={40} width={40} className=" rounded "/>
            </TableCell>
            <TableCell>{category.title}</TableCell>
            <TableCell >{category.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  


      </div>
  );
}

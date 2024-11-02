import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className=" w-full ">
          <Link href={'/admin/dashboard'}>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href={'/admin/users'}>
            <TabsTrigger value="users">Users</TabsTrigger>
          </Link>
          <Link href={'/admin/events'}>
            <TabsTrigger value="events">Events</TabsTrigger>
          </Link>
          <Link href={'/admin/categories'}>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </Link>
          <Link href={'/admin/subcategories'}>
            <TabsTrigger value="subcategories">SubCategories</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <div>
        {children} {/* Render the routed page content here */}
      </div>
    </div>
  );
}
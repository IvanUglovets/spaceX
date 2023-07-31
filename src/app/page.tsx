"use client"
import { useUser } from "@/contexts";
import Image from "next/image";


const Home = () => {
  const session = useUser()
  return <Image src={session?.user?.image || ""} alt="" width={200} height={200} />
}

export default Home;
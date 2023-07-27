import { authConfig } from "@/configs";
import { getServerSession } from "next-auth/next"


const Home = async () => {
  const session = await getServerSession(authConfig)
  console.log(session)

  return <h1>Welcome</h1>
}

export default Home;
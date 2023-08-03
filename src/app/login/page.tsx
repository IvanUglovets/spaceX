import { LoginForm } from "@/components";
import { authConfig } from "@/configs";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import { HOME } from "@/constants";

const Login = async () => {
  const session = await getServerSession(authConfig)
  if (session) redirect(HOME)

  return <LoginForm />
}


export default Login;
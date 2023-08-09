import { FC } from "react"
import { Providers } from "./providers"
import { authConfig } from "@/configs";
import { getServerSession } from "next-auth/next"
import { Navbar } from "@/components/Navbar";
import './global.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = async ({
  children,
}) => {
  const session = await getServerSession(authConfig)
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout


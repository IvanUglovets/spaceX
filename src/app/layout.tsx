import { FC } from "react"
import { Providers } from "./providers"
import { authConfig } from "@/configs";
import { getServerSession } from "next-auth/next"

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
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout


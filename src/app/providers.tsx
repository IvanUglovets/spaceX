"use client"

import { client } from "@/services"
import { ApolloProvider } from "@apollo/client"
import { FC } from "react"


interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}
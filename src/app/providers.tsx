"use client"

import { client } from "@/services"
import { ApolloProvider } from "@apollo/client"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from "next-auth"
import { Nullable } from "@/types"
import { UserContext } from "@/contexts"
import { FC } from "react"


interface ProvidersProps {
  children: React.ReactNode
  session: Nullable<Session>
}

export const Providers: FC<ProvidersProps> = ({ children, session }) => {

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={session}>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </UserContext.Provider>
    </ApolloProvider>
  )
}
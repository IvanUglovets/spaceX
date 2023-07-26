"use client"

import { client } from "@/services"
import { ApolloProvider } from "@apollo/client"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { FC } from "react"


interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
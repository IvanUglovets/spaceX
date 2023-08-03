"use client"

import { Box, Button } from "@chakra-ui/react";
import styles from "./LoginForm.module.scss"
import { signIn } from 'next-auth/react'
import { Providers, HOME } from '@/constants'

export const LoginForm = () => {

  const signInGoogle = () => {
    signIn(Providers.GOOGLE, { callbackUrl: HOME })
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={styles.wrapper}>
      <Box className={styles.box}>
        <Button onClick={signInGoogle}>Sign In Via Google</Button>
      </Box>
    </Box >
  )
}
"use client"
import { Box } from "@chakra-ui/react"
import styles from "./Navbar.module.scss"
import { usePathname } from "next/navigation"
import { LOGIN } from "@/constants"

const withoutNavbarArray = [LOGIN]

export const Navbar = () => {
  const route = usePathname()

  if (withoutNavbarArray.includes(route)) return null

  return (
    <Box className={styles.container}>
      <Box>Left</Box>
      <Box>Right</Box>
    </Box>
  )
}
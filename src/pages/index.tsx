import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

const index = () => {
  return (
        <Box bg="pink" w="100%" h="100vh">
          MAIN page
          <br />
          <Link href="/signin">Войти</Link>
          <br />
          <Link href="/signup">Регистрация</Link>
        </Box>
  )
}

export default index

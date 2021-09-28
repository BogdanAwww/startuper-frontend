import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'
import { useAuth } from '../hooks/useAuth'

const index = () => {
  const [auth, exit] = useAuth()
  return (
        <Box bg="pink" w="100%" h="100vh">
          MAIN page
          <br />
          {auth
            ? <div><button onClick={exit}>Выйти</button></div>
            : <>
          <Link href="/signin">Войти</Link>
          <br />
          <Link href="/signup">Регистрация</Link>
          </>
          }
        </Box>
  )
}

export default index

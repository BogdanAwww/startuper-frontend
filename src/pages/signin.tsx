import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/layout'
import SingIn from '../components/SignIn'

const signin = () => {
  const [email, setEmail] = useState<string>(null)
  const [password, setPassword] = useState<string>(null)

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(email, password)
  }

  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <SingIn
              email={email}
              password={password}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSignIn={handleSignIn}
            />
        </Flex>
  )
}

export default signin

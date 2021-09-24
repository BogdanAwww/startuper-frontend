import React from 'react'
import { Flex } from '@chakra-ui/layout'
import SingIn from '../components/SignIn'
import { useInput } from '../hooks/useInput'

const signin = () => {
  const [email, handleEmail] = useInput(null)
  const [password, handlePassword] = useInput(null)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(email, password)
  }

  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <SingIn
              email={email}
              password={password}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
            />
        </Flex>
  )
}

export default signin

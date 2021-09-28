import React, { useState } from 'react'
import Router from 'next/router'
import { Flex } from '@chakra-ui/layout'
import { useMutation } from 'react-query'
import SingUp from '../components/SignUp'
import { useInput } from '../hooks/useInput'
import { signUpReq } from '../api/auth'
import { AuthGSSP } from '../utils/AuthGSSP'

const signup = () => {
  const [username, handleName] = useInput(null)
  const [surname, handleSurname] = useInput(null)
  const [email, handleEmail] = useInput(null)
  const [password, handlePassword] = useInput(null)
  const [role, setRole] = useState<'STARTUPER' | 'INVESTOR'>('STARTUPER')
  const buttonDisabled = username && surname && email && password

  const mutation = useMutation(signUpReq, {
    onSuccess: () => Router.push('/signin')
  })

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    mutation.mutate({
      username,
      surname,
      email,
      password,
      role
    })
  }
  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <SingUp
              username={username}
              surname={surname}
              email={email}
              password={password}
              buttonDisabled={!buttonDisabled}
              role={role}
              handleName={handleName}
              handleSurname={handleSurname}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
              handleRole={setRole}
            />
        </Flex>
  )
}

export const getServerSideProps = AuthGSSP({ cookieCheck: process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, redirectTo: '/' })

export default signup

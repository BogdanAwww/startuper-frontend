import React from 'react'
import router from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { Flex } from '@chakra-ui/layout'
import SingIn from '../components/SignIn'
import { useInput } from '../hooks/useInput'
import { signInReq } from '../api/auth'
import { cookie } from '../utils/cookie'
import { AuthGSSP } from '../utils/AuthGSSP'

const signin = () => {
  const [email, handleEmail] = useInput(null)
  const [password, handlePassword] = useInput(null)
  const buttonDisabled = email && password

  const client = useQueryClient()

  const mutation = useMutation(signInReq, {
    onSuccess: (data) => {
      cookie.set(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, JSON.stringify(data))
      client.setQueryData(['user'], data)
      router.push('/')
    }
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutation.mutate({
      email, password
    })
  }

  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <SingIn
              email={email}
              password={password}
              buttonDisabled={!buttonDisabled}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
            />
        </Flex>
  )
}

export const getServerSideProps = AuthGSSP({ cookieCheck: process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, redirectTo: '/' })

export default signin

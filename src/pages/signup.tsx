import React, { useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import SingUp from '../components/SignUp'
import { useInput } from '../hooks/useInput'

const signup = () => {
  const [name, handleName] = useInput(null)
  const [surname, handleSurname] = useInput(null)
  const [email, handleEmail] = useInput(null)
  const [password, handlePassword] = useInput(null)
  const [role, setRole] = useState('STARTUPER')
  const buttonDisabled = name && surname && email && password

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(role)
  }

  return (
        <Flex h="100vh" alignItems="center" justifyContent="center">
            <SingUp
              name={name}
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

export default signup

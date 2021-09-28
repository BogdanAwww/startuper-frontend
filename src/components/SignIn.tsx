import React from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'

interface SingInProps {
    email: string,
    password: string,
    buttonDisabled: boolean,
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void

}

const SingIn: React.FC<SingInProps> = ({ email, password, buttonDisabled, handlePassword, handleEmail, handleSubmit }) => {
  return (
        <Flex border="1px solid #ccc" direction="column" alignItems="center" p={6}>
            <Heading as="h2" mb={10}>
                Log in
            </Heading>
            <FormControl id="email" isInvalid={email === ''} isRequired mb={6}>
                <Input value={email || ''} onChange={handleEmail} placeholder="Email" type="email" isRequired></Input>
                <FormErrorMessage>Введите почту</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={password === ''} isRequired mb={6}>
                <Input value={password || ''} onChange={handlePassword} placeholder="Password" type="password"></Input>
                <FormErrorMessage>Введите пароль</FormErrorMessage>
            </FormControl>
            <Button onClick={handleSubmit} isDisabled={buttonDisabled} colorScheme="telegram" _focus={{ boxShadow: 'none' }} isFullWidth>Sign in</Button>
        </Flex>
  )
}

export default SingIn

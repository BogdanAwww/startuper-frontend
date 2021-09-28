import React, { Dispatch } from 'react'
import { Flex, Heading, Stack } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, Radio, RadioGroup } from '@chakra-ui/react'

interface SignUpProps {
    username: string,
    surname: string,
    email: string,
    password: string,
    role: string,
    buttonDisabled: boolean,
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSurname: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleRole: Dispatch<any>,
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void

}

const SignUp: React.FC<SignUpProps> = ({ username, surname, email, password, role, buttonDisabled, handleName, handleSurname, handlePassword, handleEmail, handleSubmit, handleRole }) => {
  return (
        <Flex border="1px solid #ccc" direction="column" alignItems="center" p={6}>
            <Heading as="h2" mb={10}>
                Sign Up
            </Heading>
            <FormControl id="name" isInvalid={username === ''} isRequired mb={6}>
                <Input value={username || ''} onChange={handleName} placeholder="Name" type="text"></Input>
                <FormErrorMessage>Введите имя</FormErrorMessage>
            </FormControl>
            <FormControl id="surname" isInvalid={surname === ''} isRequired mb={6}>
                <Input value={surname || ''} onChange={handleSurname} placeholder="Surname" type="text"></Input>
                <FormErrorMessage>Введите фамилию</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={email === ''} isRequired mb={6}>
                <Input value={email || ''} onChange={handleEmail} placeholder="Email" type="email"></Input>
                <FormErrorMessage>Введите почту</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={password === ''} isRequired mb={6}>
                <Input value={password || ''} onChange={handlePassword} placeholder="Password" type="password"></Input>
                <FormErrorMessage>Введите пароль</FormErrorMessage>
            </FormControl>
            <RadioGroup onChange={handleRole} defaultValue={role} mb={6} w="100%">
                <Stack direction="row" justifyContent="space-between">
                     <Radio value="STARTUPER" colorScheme="telegram">Startuper</Radio>
                     <Radio value="INVESTOR" colorScheme="telegram">Investor</Radio>
                </Stack>
            </RadioGroup>
            <Button
                onClick={handleSubmit}
                isDisabled={buttonDisabled}
                colorScheme="telegram"
                _focus={{ boxShadow: 'none' }}
                isFullWidth>Sign up
            </Button>
        </Flex>
  )
}

export default SignUp

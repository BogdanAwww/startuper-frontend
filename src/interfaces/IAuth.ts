export interface ISignUp {
    username: string;
    surname: string;
    email: string;
    password: string;
    role: 'INVESTOR' | 'STARTUPER'
}

export interface ISignIn {
    email: string;
    password: string;
}

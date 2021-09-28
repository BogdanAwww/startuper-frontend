type AuthProps = {
    cookieCheck: string,
    redirectTo: string,
    props?: object
}

export const AuthGSSP = ({ cookieCheck, redirectTo, props = {} }: AuthProps) => {
  return async ({ req, res }) => {
    const data = req.cookies[cookieCheck]
    if (!data) {
      return {
        props
      }
    }
    return {
      redirect: {
        destination: redirectTo
      }
    }
  }
}

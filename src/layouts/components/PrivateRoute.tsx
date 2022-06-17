import { useSetRecoilState } from 'recoil'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LoginPage from 'src/pages/login'
import { loginInState } from 'src/_actions/loginIn'

const PrivateRoute = (Component: any) => {
  const Auth = (props: any) => {
    const onLogIn = useSetRecoilState(loginInState)
    const { token } = props

    if (Boolean(token)) {
      onLogIn(JSON.parse(localStorage.getItem('user') as string))
    }

    // Login data added to props via redux-store (or use react context for example)
    const isLoggedIn = true

    // console.log(isLoggedIn)

    if (!isLoggedIn) {
      return (
        <BlankLayout>
          <LoginPage />
        </BlankLayout>
      )
    }

    // If user is logged in, return original component
    return <Component {...props} />
  }

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default PrivateRoute

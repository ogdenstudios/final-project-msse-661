import { useAuth } from '@redwoodjs/auth'
import Table from '../../components/Table/Table'

const HomePage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <h1>Tyler Williams MSSE 661 Final Project</h1>
      <button
        data-cy="homePageAuthButton"
        onClick={isAuthenticated ? logOut : logIn}
      >
        {isAuthenticated ? 'Log out' : 'Log in'}
      </button>
      {isAuthenticated && <Table />}
    </>
  )
}

export default HomePage

import { useAuth } from '@redwoodjs/auth'
import Table from '../../components/Table/Table'

const HomePage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <main className="bg-gray-200 p-4 font-mono min-h-screen">
      <h1 className="text-lg font-bold text-center m-2 mt-0">
        Tyler Williams MSSE 661 Final Project
      </h1>
      {isAuthenticated && <Table />}
      <button
        className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md my-2 mx-auto block"
        data-cy="homePageAuthButton"
        onClick={isAuthenticated ? logOut : logIn}
      >
        {isAuthenticated ? 'Log out' : 'Log in'}
      </button>
    </main>
  )
}

export default HomePage

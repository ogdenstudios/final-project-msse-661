import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
const HomePage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <button
        data-cy="homePageAuthButton"
        onClick={isAuthenticated ? logOut : logIn}
      >
        {isAuthenticated ? 'Log out' : 'Log in'}
      </button>
    </>
  )
}

export default HomePage

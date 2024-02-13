import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginForm from './components/auth/Login/LoginForm'
import { loginRoutes, normalRoutes, profileRoutes, viewAllRoutes } from './routes/routes'
import AuthTemplate from './templates/AuthTemplate'
import SplashScreen from './pages/SplashScreen'
import ViewAllProductsTemplate from './templates/ViewAllProductsTemplate'
import GlobalTemplate from './templates/GlobalTemplate'
import Home from './pages/Home'
import ProfileTemplate from './templates/ProfileTemplate'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/home' element={<GlobalTemplate page={<Home />} />} />


        {
          loginRoutes.map((route, key) => {
            return (
              <Route key={key} path={route.url} element={<AuthTemplate page={route.page} />} />
            )
          })
        }

        {
          viewAllRoutes.map((route, key) => {
            return (
              <Route key={key} path={route.url} element={<GlobalTemplate page={<ViewAllProductsTemplate page={route.page} />} />} />
            )
          })
        }

        {
          normalRoutes.map((route, key) => {
            return (
              <Route key={key} path={route.url} element={<GlobalTemplate  page={route.page}  />} />
            )
          })
        }

{
          profileRoutes.map((route, key) => {
            return (
              <Route key={key} path={route.url} element={<GlobalTemplate  page={<ProfileTemplate page={route.page} />} />}  />
            )
          })
        }
      </Routes>
    </>
  )
}

export default App

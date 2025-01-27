import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import * as routes from './lib/routes'
import AllIdeasPage from './pages/AllIdeasPage'
import ViewIdeaPage from './pages/ViewIdeaPage'
import Layout from './components/Layout'
import './styles/global.scss'
import { NewIdeaPage } from './pages/NewIdeaPage'
import { SignUpPage } from './pages/SignUpPage'
import { SignInPage } from './pages/SignInPage'
import { SignOutPage } from './pages/SignOutPage'
import { EditIdeaPage } from './pages/EditIdeaPage'

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.getSignOutRoute()} element={<SignOutPage/>}/>
          <Route element={<Layout />}>
            <Route path={routes.getAllIdeaRoute()} element={<AllIdeasPage />} />
            <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage/>}/>
            <Route path={routes.getViewIdeaRoute(routes.viewIdeaRouteParams)} element={<ViewIdeaPage />} />
            <Route path={routes.getSignUpRoute()} element={<SignUpPage/> } />
            <Route path={routes.getSignInRoute()} element={<SignInPage/> } />
            <Route path={routes.getEditIdeaRoute(routes.editIdeaRouteParams)} element={<EditIdeaPage/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

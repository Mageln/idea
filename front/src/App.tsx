import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'
import AllIdeasPage from './pages/AllIdeasPage'
import ViewIdeaPage from './pages/ViewIdeaPage'
import { getAllIdeaRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import Layout from './components/Layout'
import "./styles/global.scss"

const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path={getAllIdeaRoute()} element={<AllIdeasPage />} />
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}

export default App

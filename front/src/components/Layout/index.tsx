import { Link, Outlet } from 'react-router-dom'
import { getAllIdeaRoute } from '../../lib/routes'
import css from './index.module.scss'

const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>IdeaNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeaRoute()}>
              All Ideas
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
    <Outlet/>
      </div>
    </div>
  )
}

export default Layout

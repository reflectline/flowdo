import logoLight from '@/shared/assets/icons/logoLight.svg'
import s from '@/widgets/sidebar/Sidebar.module.scss'
import icon from '@/shared/styles/icons.module.scss'
import logoDark from '@/shared/assets/icons/logoDark.svg'
import { useAppSelector } from '@/app/models/hooks'
import { selectThemeMode } from '@/app/models/appSlice'
import { Link, NavLink } from 'react-router-dom'
import { path } from '@/app/providers/router/path'
import { Calendar1, CalendarDays, ClipboardCheck, FileText, Search } from 'lucide-react'

export const Sidebar = () => {
  const themeMod = useAppSelector(selectThemeMode)

  return (
    <aside className={s.sidebar}>
      <nav>
        <div className={s.logoWrapper}>
          <Link to={path.welcome}>
            <div className={s.logoContent}>
              <img className={icon.icon20} src={themeMod === 'dark' ? logoLight : logoDark} alt="logo" />
              <span>FlowDo</span>
            </div>
          </Link>
        </div>

        <div className={s.linksWrapper}>
          <div>
            <p className={s.hint}>Home</p>

            <div className={s.btnWrapper}>
              <button className={s.baseBtn}>
                <Search className={s.ico} />
                <span>Search</span>
              </button>

              <NavLink
                to={path.dashboard.filter('all-lists')}
                className={({ isActive }) => `${s.baseBtn} ${isActive ? s.activeBtn : ''}`}
              >
                <FileText className={s.ico} />
                <span>All lists</span>
              </NavLink>
            </div>
          </div>

          <div>
            <p className={s.hint}>Filter</p>
            <div className={s.btnWrapper}>
              <NavLink
                to={path.dashboard.filter('today')}
                className={({ isActive }) => `${s.baseBtn} ${isActive ? s.activeBtn : ''}`}
              >
                <Calendar1 className={s.ico} />
                <span>Today</span>
              </NavLink>

              <NavLink
                to={path.dashboard.filter('in-process')}
                className={({ isActive }) => `${s.baseBtn} ${isActive ? s.activeBtn : ''}`}
              >
                <CalendarDays className={s.ico} />
                <span>In process</span>
              </NavLink>
              <NavLink
                to={path.dashboard.filter('done')}
                className={({ isActive }) => `${s.baseBtn} ${isActive ? s.activeBtn : ''}`}
              >
                <ClipboardCheck className={s.ico} />
                <span>Done</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

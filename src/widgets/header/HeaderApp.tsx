import s from '@/widgets/header/Header.module.scss'
import { ThemeToggle } from '@/features/theme/ThemeToggle'
import { path } from '@/app/providers/router/path'
import { NavLink, useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { useLogout } from '@/features/auth/api/auth.queries'
import { Button } from '@/shared/ui/button/Button'

export const HeaderApp = () => {
  const navigate = useNavigate()
  const { breadcrumbs } = useBreadcrumbs()
  const { mutateAsync: logout } = useLogout()

  const handleLogout = async () => {
    await logout()
    navigate(path.login)
  }

  return (
    <header className={s.headerApp}>
      <div className={s.wrapperContentApp}>
        <div className={s.pathWrapper}>
          <div className={s.hintWrapper}>
            <p>Dashboard</p>
            <ChevronRight className={s.icon} />
          </div>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <div key={`${item.to}-${index}`} className={s.crumb}>
                {isLast ? (
                  <span className={s.last}>{item.label}</span>
                ) : (
                  <NavLink to={item.to} className={s.link}>
                    {item.label}
                  </NavLink>
                )}

                {!isLast && <ChevronRight className={s.icon} />}
              </div>
            )
          })}
        </div>

        <div className={s.btnWrapper}>
          <Button variant="secondary" onClick={handleLogout}>
            Log out
          </Button>
          <ThemeToggle className={s.toggleThemeBth} />
        </div>
      </div>
    </header>
  )
}

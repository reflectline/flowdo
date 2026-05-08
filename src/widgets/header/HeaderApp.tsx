import s from '@/widgets/header/Header.module.scss'
import { ThemeToggle } from '@/features/theme/ThemeToggle'
import { path } from '@/app/providers/router/path'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { useBreadcrumbs } from '@/widgets/header/lib/useBreadcrumbs'
import { useLogout } from '@/features/auth/api/auth.queries'
import { Button } from '@/shared/ui/button/Button'
import { useRouteState } from '@/shared/lib/route/useRouteState'

export const HeaderApp = () => {
  const navigate = useNavigate()
  const { breadcrumbs } = useBreadcrumbs()
  const { activeFilter } = useRouteState()
  const { mutate: logout } = useLogout()

  const disableLink = activeFilter === 'all-lists'

  const handleLogout = async () => {
    logout(undefined, {
      onSuccess: () => {
        navigate(path.login)
      },
    })
  }

  return (
    <header className={s.headerApp}>
      <div className={s.wrapperContentApp}>
        <div className={s.pathWrapper}>
          <div className={s.hintWrapper}>
            <Link
              to={path.dashboard.root}
              onClick={(e) => {
                if (disableLink) e.preventDefault()
              }}
              aria-disabled={disableLink}
              className={disableLink ? s.hintWrapperDisable : ''}
            >
              Dashboard
            </Link>
            <ChevronRight className={s.ico} />
          </div>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <div key={item.to} className={s.crumb}>
                {isLast ? (
                  <span className={s.last}>{item.label}</span>
                ) : (
                  <Link to={item.to} className={s.link}>
                    {item.label}
                  </Link>
                )}

                {!isLast && <ChevronRight className={s.ico} />}
              </div>
            )
          })}
        </div>

        <div className={s.btnWrapper}>
          <Button className={s.button} variant="secondary" onClick={handleLogout}>
            Log out
          </Button>
          <ThemeToggle className={s.toggleThemeBth} />
        </div>
      </div>
    </header>
  )
}

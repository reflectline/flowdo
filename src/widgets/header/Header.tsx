import { HeaderWelcome } from '@/widgets/header/HeaderWelcome'
import { HeaderApp } from '@/widgets/header/HeaderApp'


type HeaderProps = {
    variant: 'welcome' | 'app'
}

export const Header = ({ variant }: HeaderProps) => {

  return variant === 'welcome'
    ? <HeaderWelcome />
    : <HeaderApp />
}
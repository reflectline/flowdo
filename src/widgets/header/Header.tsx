import { HeaderWelcome } from '@/widgets/header/HeaderWelcome'
import { HeaderApp } from '@/widgets/header/HeaderApp'


type HeaderProps = {
    variant: 'welcome' | 'app'
}

export const Header = ({ variant }: HeaderProps) => {
    if (variant === 'welcome') return <HeaderWelcome />
    if (variant === 'app') return <HeaderApp />
}

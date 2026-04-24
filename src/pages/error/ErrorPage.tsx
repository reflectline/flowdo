import s from '@/pages/error/ErrorPage.module.scss'


export const ErrorPage = () => {


    return (
        <main className={s.page}>
            <section className={s.wrapper}>
                <h1 className={s.number}>404</h1>
                <h2>Ooops! Page not found</h2>
            </section>
        </main>
    )

}

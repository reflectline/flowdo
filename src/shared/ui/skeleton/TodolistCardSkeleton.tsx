import s from '@/shared/ui/skeleton/Skeleton.module.scss';

const showCountTodolists = 10

export const TodolistCardSkeleton = () => {


  const showTodolists = (count: number) =>
    Array.from({ length: count }).map((_, i) =>
      <div key={i} className={s.card}/>)


  return (
    <section className={s.todolistsWrapper}>
      <h2 className={s.path}></h2>

      <div className={s.grid}>

        {showTodolists(showCountTodolists)}

      </div>


    </section>
  )
}
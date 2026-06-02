import s from '@/shared/ui/skeleton/Skeleton.module.scss';



export const TasksStatsSkeleton = () => {
  return (
    <section className={s.statsContent}>

      <div className={s.introWrapper}>
        <div className={s.title}/>
        <span  className={s.splitItem}/>
        <div className={s.lastUpdate} />
      </div>
      <div className={s.line} />
    </section>
  )
}

// <div className={s.statsSkeleton}>
//   <div className={s.title} />
//
//   <div className={s.cards}>
//     <div className={s.card} />
//     <div className={s.card} />
//     <div className={s.card} />
//     <div className={s.card} />
//   </div>
// </div>






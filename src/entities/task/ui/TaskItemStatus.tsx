// import type {TaskStatus} from '@/shared/api/enums'
// import {ChangeTaskStatus} from '@/features/task/actions/status-task/ChangeTaskStatus'
//
//
//
// type TaskItemStatusType = {
//   todolistId: string
//   taskId: string
//   status: TaskStatus
// }
// export const TaskItemStatus = (props:TaskItemStatusType ) => {
//   const {todolistId,taskId, status} = props
//   console.log(status)
//
//
//   return (
//     <div>
//       <ChangeTaskStatus todolistId={todolistId} taskId={taskId} status={status}/>
//       {status}
//     </div>
//   )
// }
import React from 'react'
import './style.css'
export default function TodoItem({item,handleRemove}) {
  return (
    <div key={item.id} className={item.isCompleted ? "completed task" : "task"}>
        <div className="task-time">
            {item.time}
        </div>
        <div className="task-main">
            <div className="task-content">{item.name}</div>
            <div className="task-action">
                <div className="task-btn"onClick={()=>{
                    handleRemove(item.id)
                }} >
                <i class="bi bi-trash3 danger"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

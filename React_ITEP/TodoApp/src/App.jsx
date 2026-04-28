import React, { useState,useRef } from 'react'
import TodoData from './TodoData'

const App = () => {
  const [taskList,setTaskList] = useState(TodoData);
   const [priorityList,setPriorityList] = useState([
    {"priorityId":1, "priorityValue":"Low"},
    {"priorityId":2, "priorityValue":"Normal"},
    {"priorityId":3, "priorityValue":"High"}
  ]);
  const [statusFilter,setStatusFilter] = useState("active")


  let titleRef = useRef();
  let priorityRef = useRef();
  
  const addTask=()=>{
    let title = titleRef.current.value;
    let pid = priorityRef.current.value;
    let date = new Date();
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let status = "active";
    let newTask = {title,pid,date,status};
    setTaskList([...taskList,newTask]);
  }

  const changeStatus = (task,newStatus)=>{
    let index =  taskList.findIndex((obj)=>{return obj.title == task.title});
    taskList.splice(index,1);
    task.status = newStatus;
    taskList.splice(index,0,task);
    setTaskList([...taskList]);
  }
    return (
    <div>
      <h1 className='text-center'>Todo App</h1>
      
     <div className='container mt-4'>
      <div className='row form'>
        <div className='col-md-6'>
            <input ref={titleRef} className='form-control' type="text" placeholder='Enter Task Name'/>
        </div>
        <div className='col-md-6'>
            <select  ref={priorityRef}  className='form-control'>
              <option>Select Priority</option>
              {priorityList.map((p,index)=>{
                return <option key={p.priorityId}  value={p.priorityId} >{p.priorityValue}</option>
              })}
            </select>

        </div>
       <div className="row mt-2">
        <div className="col-md-6">
            <button className="btn btn-success ml-3" onClick={addTask}>ADD</button>
        </div>
      </div>
      </div>

      <div className='mt-3'>
        <button disabled ={statusFilter=="active" ? true :false} onClick={()=>setStatusFilter("active")} className='btn btn-success mr-3'>Active ({taskList.filter((task,index)=>{return task.status=="active"}).length})</button>
        <button disabled ={statusFilter=="deactive" ? true:false} onClick={()=>setStatusFilter("deactive")} className='btn btn-primary '>Deactive ({taskList.filter((task,index)=>{return task.status=="deactive"}).length})</button>
      </div>

       <table className='table table-striped mt-4'>
         <thead>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Change Status</th>
          </tr>
          
        </thead>
        <tbody>
            {taskList.filter((task,index) => {return task.status === statusFilter}).map((task,index)=>{
                return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{task.title}</td>
                  <td>{task.date}</td>
                  <td>{priorityList.find((pObj)=>{return pObj.priorityId == task.pid}).priorityValue}</td>
                   <td>
              {task.status=="active" ? <button className="btn btn-outline-primary" onClick={()=>{changeStatus(task,"deactive")}}>Deactive</button> : <button onClick={()=>{changeStatus(task,"active")}} className="btn btn-outline-secondary">Active</button>}
            </td>
                </tr>
            })}
          </tbody>
      </table>
     </div>
    </div>
  )
}

export default App

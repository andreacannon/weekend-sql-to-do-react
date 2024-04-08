import { useState } from 'react';

 import { postTask } from '../../TaskAPI/task.api';

 function SubmitTask(props){
     const [taskName, setTaskName]=useState('');
     setTaskDueDate('');

     const [taskStatus, setTaskStatus]=useState(false);

     const handleChangeTaskStatus=(event)=>{
         setTaskStatus(!taskStatus);
     }

     const handleSubmitTask=(event)=>{
         event.preventDefault();
         console.log('Value for Submit:', {task: taskName, taskStatus: False});

         //post task
         postTask({
             task: taskName,
             taskStatus: false
         })
         .then((response)=>{
             props.taskRefreshCallback();

             setTaskName('');
         })
         .catch((err)=>{
             console.error('ERROR:', err);
         });
     };
 }

 export default SubmitTask; 
import React, { useState, useEffect } from "react";
import Task from "./Task";


function Home() {
  const initialArray =localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
  const [tasks, setTaskes] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();
    setTaskes([...tasks,{title,description}])
   

  }

  const deleteTask =(index)=>{
    const filterArr = tasks.filter((value,i)=>{
      return i !== index
    })
    setTaskes(filterArr)

  }
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  
  return (
    <div className="container">
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder="Deccription" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item,index) => (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  );
}

export default Home;

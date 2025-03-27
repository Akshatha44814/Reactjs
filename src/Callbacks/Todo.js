import React from "react"


const Todo = (props) =>{
    console.log(props, "children props")
    return <div>
        {props.todos.map((item,index)=>{
        return<div key={index}>{item}</div>
    })}
    <button onClick={()=>{props.addTodo()}}>+</button>
    </div>
}

export default React.memo(Todo)
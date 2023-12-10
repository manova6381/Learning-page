import React, { useState } from "react"

const TodoAppPage = () =>{

    const [todoText, updateTodo] = useState("");

    const [messagList, updateMessageList] = useState([]);

    const TodoMessage = (event) =>{
        updateTodo (event.target.value)
    }

    const addText = () =>{

        // alert(todoText)

    // ----> ES5 
        // const addTodoMessage = () =>{
        //     //alert(todoText)
        //     messagList.push(todoText);
        //     updateMessageList(messagList);
        // }
    
    // ----> ES6 - Spread Operator [...array_variable_name, value]

    updateMessageList([...messagList, todoText])
    }

    const todoList = messagList.map((value,index) =>{
        return(
            <h3 key={index}>{value}</h3>
        )
    })
    return(
        <div>
            <h1>Todo App Page</h1>
            <label>Enter a TodoMessage</label>
            <input type="text" placeholder="Enter a TodoMessage..." onChange={TodoMessage}></input>
            <button onClick={() =>addText()}>Add</button>
            {todoList}
        </div>
    )
}

export default TodoAppPage;
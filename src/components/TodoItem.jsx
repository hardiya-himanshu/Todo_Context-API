import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

function TodoItem({todo}) {

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)

  const{updateTodo,deleteTodo, toggleComplete}=useTodo()

  const editTodo = ()=>{
    updateTodo(todo.id, {...todo,todoMsg: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
        className={`flex border border-black/10 rounded-md px-3 mx-4 my-2 py-1.5 gap-x-3 shadow-sm duration-300 text-black ${
            todo.completed ? "bg-green-400" : "bg-white"
        }`}>
        <input
            type="checkbox"
            className="cursor-pointer w-6 accent-black"
            checked={todo.completed}
            onChange={toggleCompleted}/>
        <input
            type="text"
            className={`text-lg font-medium  border outline-none w-full bg-transparent rounded-md duration-300 ${
                isTodoEditable ? "border-black px-3" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}/>
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
                if (todo.completed) return;
                if (isTodoEditable) editTodo();
                else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}>
            {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => deleteTodo(todo.id)}>
            ❌
        </button>
    </div>
);
}

export default TodoItem

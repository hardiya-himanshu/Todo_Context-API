import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {

    const[todoMsg, setTodoMsg] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todoMsg) return
        addTodo({todoMsg:todoMsg, completed:false})
        setTodoMsg("")
    }

  return (
    <form onSubmit={add} className="flex gap-3">
        <input
            type="text"
            placeholder="Your Todo..."
            className="text-lg w-full border border-black/10 rounded-lg px-3 outline-none duration-150 placeholder:text-gray-700 text-black font-semibold py-1.5"
            value={todoMsg}
            onChange={e=>setTodoMsg(e.target.value)}
        />
        <button type="submit" className="rounded-lg px-5 py-2 bg-blue-600 text-white text-lg">
            ADD
        </button>
    </form>
);
}

export default TodoForm

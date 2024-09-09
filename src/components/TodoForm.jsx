import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {

    const[todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({todo:todo, completed:false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex gap-4 ">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 p-3"
            value={todo}
            onChange={e=>setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-lg px-4 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
);
}

export default TodoForm

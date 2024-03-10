import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todoMsg: "Todo Message",
            completed:false,
        }
    ],
    addTodo:(todoMsg)=>{},
    updateTodo:(id,todoMsg)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = () => useContext(TodoContext)


export const TodoProvider = TodoContext.Provider
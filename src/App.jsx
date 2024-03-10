import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const[todos, setTodos] = useState([])

  const addTodo=(todoMsg)=>{
    setTodos((prev)=>[{id:Date.now(),...todoMsg},...prev])
  }

  const updateTodo = (id, todoMsg) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todoMsg:prevTodo)))
  }

  const deleteTodo = (id) =>  {
      setTodos(prev=>prev.filter(prevTodo=>prevTodo.id!==id))
  }

  const toggleComplete = (id) => {
      setTodos(prev=>prev.map(prevTodo=>prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos",))
      if(todos && todos.length>0){
        setTodos(todos)
      }
  },[])

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
            <div className="bg-blue-400 h-screen py-8 flex flex-col gap-y-4">
                <div className="flex flex-col justify-between gap-5 bg-gray-800 w-full max-w-2xl mx-auto shadow-md rounded-lg p-4 text-white">
                    <h1 className="text-3xl font-bold text-center p-3">TO-DO LIST</h1>
                    <TodoForm/>
                </div>
                <div className='flex flex-col gap-5 bg-gray-800 w-full max-w-2xl mx-auto shadow-md rounded-lg'>
                  <div className="flex flex-wrap ">
                      {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-full'>
                        <TodoItem todo={todo}/>
                        </div>
                      ))}
                  </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App

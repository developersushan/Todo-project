import { useDispatch } from "react-redux"
import { AddTodoCreate } from "../redux/state/todo/todoSlice"
import { useRef } from "react"

const AddTodo = () => {
  const inputRef = useRef()
  const dispatch =useDispatch()
  return (
    <div>
      <div className="flex items-center gap-4">
        <input ref={inputRef} type="text" className="w-[790px] p-2 rounded border-none outline-none  " placeholder="Task Write now......"/>
        <button onClick={()=>dispatch( AddTodoCreate(inputRef.current.value) )} className="text-white bg-pink-500">Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodo

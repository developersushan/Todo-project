import {  useSelector } from "react-redux"

import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"

const TodoList = () => {
    const todoItems= useSelector((state)=>state.todo.value)

  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Task Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            {
                todoItems.map((item,i)=>{
                    return(
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">
                               {i}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item}
                            </th>
                            <td className="px-6 py-4">
                                <button onClick={()=>EditButton(i,item)} className="text-white bg-green-500">Edit</button>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={()=>{DeleteButton(i)}} className="text-white bg-pink-500">Remove</button>
                            </td>
            
                        </tr>
                    )
                })
            }



        </tbody>
    </table>
</div>

  )
}

export default TodoList

import AddTodo from "../components/AddTodo"
import TodoList from "../components/TodoList"

const TodoPage = () => {
  return (
    <div className="bg-purple-200 w-1/2 rounded p-4 mx-auto ">
      <h3 className="text-2xl font-bold  capitalize">Todo app</h3>
        <div className="py-8">
            <AddTodo/>
            <TodoList/>
        </div>
    </div>
  )
}

export default TodoPage

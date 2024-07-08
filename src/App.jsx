import './App.css'
import CounterPage from './pages/CounterPage'
import TodoPage from './pages/TodoPage'

function App() {

  return (
    <>
    <div className='mx-auto flex justify-center items-center h-[100vh]'>
      {/* <CounterPage/> */}
      <TodoPage/>
     </div>
    </>
  )
}

export default App

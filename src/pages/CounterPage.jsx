import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setCustom } from "../redux/state/counter/counterSlice"
import { useRef } from "react"

const CounterPage = () => {
    const count = useSelector((state)=>state.counter.value)
    const myNumber =useRef()
    const dispatch = useDispatch()
  return (
    <div className="bg-purple-200 w-1/4 rounded p-4 mx-auto ">
      <h3 className="text-2xl font-bold  capitalize">react redux Counter app</h3>
        <div className="py-8">
            <span className="text-3xl font-bold">{count}</span>
            <div className="flex items-center gap-2  mt-4">
                <button onClick={()=>{dispatch(increment())}} className="text-white hover:scale-110 transition-all ease-out duration-300 ">Increase</button>
                <button onClick={()=>{dispatch(decrement())}}  className="text-white hover:scale-110 transition-all ease-out duration-300 ">decrease</button>
            </div>
            <div className="mt-3">
                <input ref={myNumber} type="number" className="w-full p-2 rounded border-none outline-none border-[1px] " />
                <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="mt-3 bg-pink-500 text-white">setCustom</button>
            </div>
        </div>
    </div>
  )
}

export default CounterPage

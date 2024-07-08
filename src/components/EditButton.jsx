import Swal from 'sweetalert2'
import store from '../redux/store/store'
import { EditTodo } from '../redux/state/todo/todoSlice'
const EditButton = (i,item) => {
    
    Swal.fire({
        title: "update text",
        input:'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i,task:value}))
            }
        }

      })
}

export default EditButton

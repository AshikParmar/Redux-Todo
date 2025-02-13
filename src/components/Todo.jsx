import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo,updateTodo, toggleTodo } from '../redux/slices/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const dispatch = useDispatch()

    const inputRef = useRef(null);


    function handleUpdate(id,text){
      if(editId === id){
        dispatch(updateTodo({ id, newText: editText }));
        setEditId(null);
      }
      else{
        setEditId(id);
        setEditText(text);

        setTimeout(()=> inputRef.current?.focus(),0);
      }
      
    } 

    const toggleCompleted = (id) => {
      dispatch(toggleTodo(id));
    }

  return (
    <>
    <ul className="list-none">
        {todos.map((todo) => todo.text ? (
          <li
            className={`mt-4 flex justify-between items-center border border-black/10 space-x-2 px-4 py-2 rounded shadow-sm shadow-white/50 duration-300  text-black ${todo.complete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
            key={todo.id}
          >
            <div className='flex gap-2'>
              <input 
                type="checkbox"
                className='cursor-pointer'
                checked={todo.complete}
                onChange={() => toggleCompleted(todo.id)}
                />
              {editId === todo.id ? (
                <input
                  className='border outline-none w-full border-black/10 px-2'
                  ref={inputRef}
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUpdate(editId, editText)} 
                /> ):
                <div className={`border outline-none w-full bg-transparent border-transparent ${todo.complete ? "line-through text-gray-500" : ""}`}>{todo.text}</div>
              }

                {/* <input
                  className={`border outline-none w-full bg-transparent rounded-lg ${editId===todo.id ? "border-black/10 px-2" : "border-transparent"} ${todo.complete ? "line-through" : ""}`}
                  ref={inputRef}
                  type="text"
                  value={editId===todo.id ? editText : todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUpdate(editId, editText)} 
                  readOnly={!(editId===todo.id)}
                />  */}
            </div>

            <div className="flex space-x-2">
              {/* Update Button */}
              <button
                onClick={() => handleUpdate(todo.id,todo.text)}
                disabled={todo.complete}
                className="text-white bg-blue-500 border-0 py-1 md:px-4 px-1 focus:outline-none hover:bg-blue-600 rounded text-md disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182l-9.43 9.43a1.5 1.5 0 01-.53.352l-4.8 1.6a.75.75 0 01-.949-.949l1.6-4.8a1.5 1.5 0 01.352-.53l9.43-9.43zM15.5 5.25L18.75 8.5"
                  />
                </svg>
              </button>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-1 md:px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>

          </li>
         ):
        <></>
        )}
      </ul>
    </>
  )
}

export default Todos
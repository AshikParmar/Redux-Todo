import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function addTodoHandler(e){
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
            type="text"
            className="rounded border  focus:border-indigo-500 focus:ring-1 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out border-black/10 bg-white/20"

            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />

        <button
            type="submit"
            className="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none
             hover:bg-green-700 rounded text-lg"
            >Add
        </button>
    </form>
  )
}

export default AddTodo;

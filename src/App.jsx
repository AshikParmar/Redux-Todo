
import { useDispatch } from 'react-redux';
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { resetTodos } from './redux/slices/todoSlice';

function App() {
  const dispatch = useDispatch();

  const handleClearStorage = () => {
    dispatch(resetTodos()); 
  };
  

  return (
    <>
      <button onClick={handleClearStorage} className="bg-red-500 absolute top-2 right-2 text-white px-4 py-2 rounded">
        Clear All Todos
      </button>
      <h2 className='font-extrabold text-3xl mt-10 underline text-white'>Manage Your Todos</h2>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

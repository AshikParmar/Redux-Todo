
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h2 className='font-extrabold text-3xl underline text-white'>Manage Your Todos</h2>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

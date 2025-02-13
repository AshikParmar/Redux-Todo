import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: [{
        id:1, 
        text:"Here is Your Todo List",
        complete: false,
        }]
}

const loadTodos = () => {
    
    let savedTodos = localStorage.getItem("todos");
    savedTodos = JSON.parse(savedTodos);
    
    if(savedTodos && savedTodos.todos.length){
        return savedTodos;
    }

    return initialState;
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: loadTodos(),
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false,
            };
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state));
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state));
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
              todo.text = newText; 
              localStorage.setItem("todos", JSON.stringify(state));
            }
        },
        toggleTodo: (state, action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.complete = !todo.complete; 
              localStorage.setItem("todos", JSON.stringify(state));
            }
        },
        resetTodos: (state)=>{
            state.todos = initialState.todos;
            localStorage.removeItem("todos");
        }
    }
})


export const {addTodo, removeTodo, updateTodo, toggleTodo, resetTodos} = todoSlice.actions;
export default todoSlice.reducer;
import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id:1, 
        text:"Here is Your Todo List",
        complete: false,
        }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                complete: false,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
              todo.text = newText; 
            }
        },
        toggleTodo: (state, action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
              todo.complete = !todo.complete; 
            }
        },
    }
})


export const {addTodo, removeTodo, updateTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer;
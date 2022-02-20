<template>
<div class="container mx-auto text-center py-8">
<h2 class="text-4xl font-bold text-blue-800 py-4">A simple todo list</h2>
<div class="max-w-lg p-2 mx-auto px-4 m-4 sm:px-6 lg:px-8 borde-solid border border-slate-300 rounded-lg ">
<h3 class="text-5xl font-bold text-center text-blue-200">Jest do it</h3>
    <div class="max-w-3/4 mx-auto flex justify-between my-8 h-8">
    <input v-model.trim="newTodo" @keyup.enter="addTodo()" type="text" class="p-2 w-3/4 shadow-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500 block" name="newTodo" placeholder="Write in what you need to do">
    <button @click="addTodo()" class="w-24 rounded-md bg-sky-500 hover:bg-blue-900 transition duration-700 text-white ml-4">Add</button>
  </div>
  <!-- List do -->
  <div class="my-4">
    <ul class="text-center my-2">
      <li class="my-4 h-8 py-2 w-full flex justify-between" v-for="(todo,id) in todos" :key="todo.id" :class="{done: todo.done}" @click="doneTodo(todo)">
        <span v-show="!todo.isEdit">{{todo.title}}</span> 
       <input v-show="todo.isEdit" :value="todo.title" @keyup.enter="handleUpdate(todo, $event)" type="text">
        <div>
        <button class="ml-4" @click="handleEdith(todo)">Edith</button>
        <button class="ml-4" @click="removeTodo(id)">Remove</button> 
        </div>
      </li>
    </ul>
  </div>
</div>
<p class="text-slate-500">Function: Add, delete, modify</p>
<p class="text-sm text-slate-300">A simple todo list build by Vue3.Js composition API and TailwindCss</p>
</div>
</template>

<script>
import { ref } from 'vue'
export default{
  name: 'TodoLast',
  setup(){
    const newTodo = ref('');
    const defaultTodo = [{
      done: false,
      title: '做瑜珈',
      isEdit: false,
      isFinish: false,
      id: new Date().getTime(),
    }];
   let tempTodo = ref({})

    const TodosData = JSON.parse(localStorage.getItem('todos')) || defaultTodo;
    const todos = ref(TodosData);

    // Save to storageData
    const setTodos = () => {
      const storageData = JSON.stringify(todos.value)
      localStorage.setItem('todos',storageData);
    };
    
    // Add a todo
    const addTodo = () => {
      if(newTodo.value){
        todos.value.unshift({
          id: new Date().getTime(),
          title: newTodo.value,
          done: false,
          isEdit: false,
          isFinish: false,
        })
        newTodo.value='';
      }
        setTodos();
      }

    // remove todo
    const removeTodo = (id) => {
      todos.value.splice(id, 1);
      setTodos();
    };

    const doneTodo = (todo) => {
      todo.done = !todo.done;
      console.log(todo);
      setTodos();
    };

    // edith Todo
    const handleEdith = (todo) => {
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      } else {
        console.log('todo上沒有isEdit屬性');
        // $set(todo,'isEdit', true)
      }
    } 

  // update todo
    const handleUpdate = (todo, e) => {
      console.log(todo.title,e);
      tempTodo = ref({...todo});
      tempTodo.title = e.target.value;
      todo.title = tempTodo.title
      todo.isEdit = false;
      setTodos();
    }


  const addIcon = ref(`<svg class="w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>`);
  const deleteIcon = `<svg class="w-8 text-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>`
  const editIcon = `
      <svg class="w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
  </svg>`

    return {
      newTodo,
      todos,
      addTodo,
      tempTodo,
      removeTodo,
      setTodos,
      doneTodo,
      handleEdith,
      handleUpdate,
      deleteIcon
    }
  }
}
</script>

<style scoped>
*{
  /* outline: 1px solid green; */
}
.done {
  @apply line-through;
        text-decoration: line-through;
      }
</style>

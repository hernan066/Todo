import './styles.css';

import{ Todo, TodoList} from "./classes";    
import { crearTodoHtml } from './js/componentes';
/* import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class'; */

const todoList = new TodoList();

//instanciar la clase
const tarea = new Todo("Aprender Javascript");
todoList.nuevoTodo(tarea);

console.log(todoList)

crearTodoHtml (tarea);
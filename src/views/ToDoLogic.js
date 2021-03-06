import React from 'react';
import { useEffect } from 'react';
import { getToDos, updateToDos, createToDo, deleteTasks } from '../services/users';
import { useState } from 'react';

export default function ToDoLogic() {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchToDos = async () => {
      const data = await getToDos();
      setTodos(data);
    };
    fetchToDos();
  }, []);

  async function handleClick(todo) {
    await updateToDos(todo.id, !todo.is_complete);
    const data = await getToDos();
    setTodos(data);
  }

  async function handleSubmit() {
    await createToDo(newTask);
    const data = await getToDos();
    setTodos(data);
    setNewTask('');
  }

  async function handleDelete() {
    await deleteTasks();
    const data = await getToDos();
    setTodos(data);
  }

  return (
    <div>
      <input value={newTask} type="text" onChange={(e) => setNewTask(e.target.value)}></input>
      <button onClick={handleSubmit}>add task</button>
      {todos.map((item) => (
        <div key={item.id}>
          <input
            checked={item.is_complete}
            type="checkbox"
            onChange={() => {
              handleClick(item);
            }}
          ></input>
          <span>{item.task}</span>
        </div>
      ))}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

//list of tasks

//useEffect that grabs all tasks from database
//map through and render on page
//manually enter a couple todos in supabase

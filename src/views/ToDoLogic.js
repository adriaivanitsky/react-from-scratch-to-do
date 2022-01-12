import React from 'react';
import { useEffect } from 'react';
import { getToDos } from '../services/users';
import { useState } from 'react';

export default function ToDoLogic() {
  // const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchToDos = async () => {
      const data = await getToDos();
      setTodos(data);
      setClick(false);
    };
    fetchToDos();
  }, [click]);
  return (
    <div>
      <input type="text"></input>
      <button onClick={() => setClick(true)}>add task</button>
      {todos.map((item) => (
        <div key={item.id}>
          <input checked={item.is_complete} type="checkbox"></input>
          <p>{item.task}</p>
        </div>
      ))}
    </div>
  );
}

//list of tasks

//useEffect that grabs all tasks from database
//map through and render on page
//manually enter a couple todos in supabase

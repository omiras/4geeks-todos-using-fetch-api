import React, { useEffect, useState } from "react";

import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/omiras")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [todos]);

  const createHanlder = (text) => {
    console.log("Crear tarea: " + text);
    fetch("https://assets.breatheco.de/apis/fake/todos/user/omiras", {
      method: "PUT",
      body: JSON.stringify([...todos, { label: text, done: false }]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
  };

  const deleteHandler = (taskIndex) => {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/omiras", {
		method: "PUT",
		body: JSON.stringify(todos.filter((t, index) => index != taskIndex)),
		headers: {
		  "Content-Type": "application/json",
		},
	  })
		.then((resp) => {
		  console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
		  console.log(resp.status); // el código de estado = 200 o código = 400 etc.
		  return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		})
		.then((data) => {
		  //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
		  console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
		})
		.catch((error) => {
		  //manejo de errores
		  console.log(error);
		});
  }

  return (
    <div className="container">
      <TodoList todos={todos} onCreate={createHanlder} onDelete={deleteHandler}/>
    </div>
  );
};

export default Home;

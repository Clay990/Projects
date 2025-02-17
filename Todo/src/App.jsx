import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  const [valuee, setvaluee] = useState("");
  const [add, setadd] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data && data !== "undefined") {
      setTodos(JSON.parse(data));
    } else { 
      setTodos([]);
    }
  }, []);

  const saveToStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handledetele = (num) => {
    let newtodos = todos.filter((todo) => todo.num !== num);
    setTodos(newtodos);
    saveToStorage(newtodos);
  };

  const handlesave = () => {
    setvaluee("");
    setadd(add + 1);
    const newTodos = [
      ...todos,
      {
        num: add,
        task: valuee,
      },
    ];
    setTodos(newTodos);
    saveToStorage(newTodos);
  };

  const handlevaluee = (e) => {
    setvaluee(e.target.value);
  };
  const handlecheck = (e) => {
   
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="main">
          <div className="taskCard">
            <div id="addbox">
              <input type="text" name="" id="addtext" value={valuee} onChange={handlevaluee} />
              <button className="btn" onClick={handlesave}>
                Save
              </button>
            </div>
            <div className="center">
              <h3 id="hlist">List of task</h3>
            </div>
            <div className="scroll">
            {todos.map((todo) => {
              return (
                <div key={todo.num}>
                  <div className="list">
                    <input type="checkbox" name="" className="checkbox" onClick={handlecheck}/>
                    <h4>{todo.task}</h4>
                    <button className="btno" onClick={() => handledetele(todo.num)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

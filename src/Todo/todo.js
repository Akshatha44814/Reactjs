import { useState } from "react";

const Todo = () => {
  const [newTask, setTask] = useState("");
  const [todoList, setTododlist] = useState([]);
  const [strikeList, setStrike] = useState([]);
  const [updateList, setUpdate] = useState("");

  const handler = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };
  const AddTodo = (e) => {
    setTododlist((todo) => [...todo, newTask]);
    setTask("");
  };
  const deleteitem = (e) => {
    console.log(strikeList, todoList);
    const deletedData = todoList.filter((itm, ind) => {
      if (ind != e.target.id) {
        return true;
      }
    });
    const resData = strikeList.filter((itm) => {
      return deletedData.includes(itm);
    });

    setTododlist(deletedData);
    setStrike(resData);
  };
  const strike = (e) => {
    setStrike((st) => [...st, e.target.id]);
  };
  const updateItem = (e) => {
    console.log(e.target.id);
    setUpdate(parseInt(e.target.id));
  };
  const editItem = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };
  const saveEdit = (e) => {
    console.log(newTask, e.target.id);
    const res = todoList.map((itm, ind) => {
      if (ind == e.target.id) {
        return newTask;
      } else {
        return itm;
      }
    });
    setTododlist(res);
    setUpdate("");
    setTask("");
  };
  return (
    <div className="warpper">
      <h1>Todo List</h1>
      <div style={{ display: "flex" }}>
        <input type="text" onChange={(e) => handler(e)} value={newTask} />
        <button onClick={(e) => AddTodo(e)}>Add</button>
      </div>

      <div>
        <h3>
          {todoList?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  background: "grey",
                  padding: 10,
                  margin: 10,
                  color: "blue",
                }}
              >
                <div>
                  {strikeList?.includes(item) ? (
                    <div>
                      <mark>{item}</mark>
                    </div>
                  ) : (
                    <div>
                      {updateList === index ? (
                        <div>
                          <input
                            type="text"
                            onChange={(e) => editItem(e)}
                            placeholder={newTask}
                          />
                          <button id={index} onClick={(e) => saveEdit(e)}>
                            save
                          </button>
                        </div>
                      ) : (
                        <div>
                          {item}
                          <button id={index} onClick={(e) => updateItem(e)}>
                            Update
                          </button>
                        </div>
                      )}
                      <button id={item} onClick={(e) => strike(e)}>
                        done
                      </button>
                    </div>
                  )}
                  <button id={index} onClick={(e) => deleteitem(e)}>
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </h3>
      </div>
    </div>
  );
};

export default Todo;

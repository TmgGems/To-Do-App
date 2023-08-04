import { Accordion } from "react-bootstrap";
import MsgAlert from "./Alert";
import ListSubtasks from "./ListSubtask";
import AddSubtask from "./AddSubtask";
import { API_SERVER } from "../contexts";

function ListTodo(props) {
  const { todos } = props;

  return (
    <>
      {todos && todos.length > 0 ? (
        <>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {todos.map((todo) => {
              return (
                <Accordion.Item key={todo?._id} eventKey={todo?._id}>
                  <Accordion.Header>{todo?.title}</Accordion.Header>
                  <Accordion.Body>
                    {todo?.Subtasks && todo?.Subtasks.length > 0 ? (
                      <ListSubtasks subtasks={todo?.subtasks} />
                    ) : (
                      <MsgAlert msg="No Subtask found. Add one to get started ..." />
                    )}
                    <AddSubtask
                      todo={todo}
                      label="Add new Subtask"
                      placeholder="Eg:Gather Clothes"
                      url={`${API_SERVER}/subtasks`}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </>
      ) : (
        <>
          <MsgAlert msg="No Task found , Add one to get started ..." />
        </>
      )}
    </>
  );
}

export default ListTodo;

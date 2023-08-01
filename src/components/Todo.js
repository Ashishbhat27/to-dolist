import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <ListGroup.Item>
      <div 
        className={`todo ${todo.isCompleted ? "completed" : ""}`}
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div className="ml-auto">
          <Button variant="success" className="mr-2" onClick={() => completeTodo(index)}>Complete</Button>
          <Button variant="danger" onClick={() => removeTodo(index)}>x</Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default Todo;

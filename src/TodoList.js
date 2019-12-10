import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todoItem => (
      <TodoItem todo={todoItem} key={todoItem.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TodoList;
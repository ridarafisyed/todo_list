import { List, Typography } from '@mui/material';
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, deleteTodo }) => {
  if (todos.length === 0) {
    return <Typography variant='body1'>No Task added</Typography>
  }
  return (
    <div>
      <List>
        {
          todos?.map(
            (todo, index) => (
              <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
            )
          )
        }
      </List>
    </div>
  )
}
import { MdDeleteOutline } from "react-icons/md";
import { Button, IconButton, ListItem, ListItemText } from '@mui/material';


export const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    
    <ListItem key={index}>
      <ListItemText> {todo.id +1}. {todo.task}
        
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <MdDeleteOutline />
        </IconButton>
    
      </ListItemText>
    </ListItem>
  )
}
import { useState } from 'react'
import { MdAdd } from "react-icons/md";
import {TextField, Button, Box, Stack} from '@mui/material';


export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <Box
      component="form"
      display={'flex'}
      
      spacing={2}
      noValidate
      autoComplete="off"
    onSubmit={handleSubmit}>

      <TextField
          id="standard-basic"
          required
          variant="filled"
          fullWidth
          type='text'
          value={value} 
          onChange={(e) => setValue(e.target.value)} />
      
      <Button color="primary" type='submit' variant="contained" ><MdAdd /></Button>

    
    </Box>
  )
} 
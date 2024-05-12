import { useState, useEffect } from 'react'
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log('Component mounted or updated')

    return () => {
      console.log('Component unmounted');
    }

  }, [todos])
  
  const addTodo = (task) => {
    const newTodos = [...todos, { task, id: todos.length }];
    setTodos(newTodos); // using  spread operator to add new task into the existing array
  }

  const deleteTodo = (id) => {
    const filterTodos = todos.filter(todo =>  todo.id !== id)
    setTodos(filterTodos)
  }

  return (
    <Container maxWidth="sm" align='center' >
      <Typography variant="h4" gutterBottom align='center'>
       Todo List
      </Typography>
     

     
      <TodoForm addTodo={addTodo} />
      <Box >
        <Card variant='outlined' sx={{ marginTop:'15px'}}>

          <CardContent>
        <TodoList todos={todos} deleteTodo={deleteTodo} />   </CardContent></Card>
      </Box>
    </Container>
  )
}

export default App

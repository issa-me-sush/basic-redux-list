import './App.css';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addItem, deleteItem } from './features/mainslice'

function App() {
  const [input, setInput] = useState('');
  const list = useSelector((state) => state.list)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(input))
    setInput('');
  }

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
    <ul>
      {
      list.map((item) =>
        (<li key={item.id} onClick={() => handleDelete(item.id)}>{item.text}</li>)
      )
      }
    </ul>
  </div>
  );
}

export default App;

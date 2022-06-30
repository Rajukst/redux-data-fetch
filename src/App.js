
import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';
import PhotoShow from './features/PhotoSlice/PhotoShow';
import DisplayTodos from './features/todos/DisplayTodos';
import ToDoView from './features/todos/ToDoView';

function App() {
  return (
    <div className="App">
      <h1>Hello Counter</h1>
      <CounterView></CounterView>
      <PostView></PostView>
      <PhotoShow></PhotoShow>
     <ToDoView></ToDoView>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';
import PhotoShow from './features/PhotoSlice/PhotoShow';

function App() {
  return (
    <div className="App">
      <h1>Hello Counter</h1>
      <CounterView></CounterView>
      <PostView></PostView>
      <PhotoShow></PhotoShow>
    </div>
  );
}

export default App;

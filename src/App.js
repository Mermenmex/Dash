import logo from './logo.svg';
import './App.css';
import YoutubeCounter from './components/YouTubeCounter';
import LatestVideo from './components/LatestVideo';

function App() {
  return (
    <div className="App">
      <YoutubeCounter />
      <LatestVideo />
    </div>
  );
}

export default App;

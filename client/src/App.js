import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './Map';
import Panel from './Panel';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Panel />
      <Map />
    </div>
  );
}

export default App;

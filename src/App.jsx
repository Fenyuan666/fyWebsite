import Galaxy from './components/Galaxy';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Galaxy Demo</h1>
      
      <div className="demo-section">
        <h2>Basic Usage</h2>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Galaxy />
        </div>
      </div>

      <div className="demo-section">
        <h2>With Custom Props</h2>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


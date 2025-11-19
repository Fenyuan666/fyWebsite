import Galaxy from './components/Galaxy';
import SplitText from './components/SplitText';
import './App.css';

function App() {
  return (
    <div className="app">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <Galaxy />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <SplitText
            text="Welcome To 芬苑Saki"
            className="split-text-title"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;


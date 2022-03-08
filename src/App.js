import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
        backgroundColor: 'lightgrey',
        width: '100px',
        height: '100px'
    }}>
      <header className="App-header">
        <h1>Micheal Mendes</h1>
        <h2>Software Engineer, Recent Graduate of Worcester State University</h2>
      </header>
      <p>
        This is some text to be used for troubleshooting. Here are some more words.
        And some more.
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

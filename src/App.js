import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
        backgroundImage: 'linear-gradient(to bottom right, rgb(44, 43, 43), rgb(95, 54, 104))',
        width:'100%',
        height:'100%'
      }}>
      <header className="App-header">
        <h1>Micheal Mendes</h1>
        <h2>Software Engineer, Recent Graduate of Worcester State University</h2>
      </header>
      <p className='personalDesc' style={{
          height: '10%',
          width: '100%'
        }}>
        I am a recent graduate of Worcester State University with a B.S. in Computer Science with a focus on Software Development and a minor in Mathematics.
        I have a strong backgorund in Java but have exposure to a variety of languages, such as C# and Javascript. This is my personal site though, so no need
        to bore you with my whole resume here, all that fun stuff can be seen on my LinkedIn profile in the footer.
      </p>
      <div className='App-projects' style={{width: '100%', height: '10%'}}>
        <h3>Projects</h3>
        <img src='visuals/Background.jpg' class='Header-backghround' alt='Cityscape Background'></img>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

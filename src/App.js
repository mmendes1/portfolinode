import logo from './logo.svg';
import Background from './visuals/Background.jpg';
import Project1 from './visuals/mm_timetrial.gif';
import gmail from './visuals/gmail_icon.jpg';
import linkedin from './visuals/linkedin_icon.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{
        backgroundImage: 'linear-gradient(to bottom right, rgb(44, 43, 43), rgb(95, 54, 104))',
        width:'100%',
        height:'100%'
      }}>
      <header className="App-header" style={{
        position: 'relative'
      }}>
        <img src={Background} className="Header-background" alt="Background"/>
          <h1>Micheal Mendes</h1>
          <h2>Software Engineer, Recent Graduate of Worcester State University</h2>
      </header>
      <span class="line"></span>
      <p className='personalDesc' style={{
          height: '100%',
          width: '40%',
          textAlign: 'center',
          padding: '0% 30% 0%'
        }}>
        I am a recent graduate of Worcester State University with a B.S. in Computer Science with a focus on Software Development and a minor in Mathematics.
        I have a strong backgorund in Java but have exposure to a variety of languages, such as C# and Javascript. This is my personal site though, so no need
        to bore you with my whole resume here, all that fun stuff can be seen on my LinkedIn profile in the footer.
      </p>
      <div className='App-projects' style={{width: '100%', height: '10%'}}>
        <h3>Projects</h3>
        <span class="line"></span>
        <p style={{
          margin: '0%',
          padding: '1% 1% 1%'
        }}>
          Program to determine efficiency of different methods of matrix multiplication
          </p>
        <img src={Project1} className='Matrixproj-gif' alt='Project-1' />
    </div>
      <footer className='App-footer'>
      <span class="line" style={{marginTop: '-0.5%'}}></span>
        <a href='mailto:mikehmendes@gmail.com'>
          <img src={gmail} class="gmail_icon" alt="Gmail Icon" />
        </a>
        <a href="https://www.linkedin.com/in/michael-mendes-161006199/">
          <img src={linkedin} class="linkedin_icon" alt="LinkedIn Icon" /> 
        </a>
       </footer>
    <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import meet from './meet.svg'
import './App.css';

function Header(props) {
  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.linkLabel}
      </a>
    </header>
  )
}

function Jinu() {
  return(
    <Header linkLabel="My name is Jchat" logo={logo}></Header>
  )
}

function App() {
  return (
    <div className="App">
      <Header linkLabel="Nice to meet you" logo={meet}></Header>
      <Jinu></Jinu>
    </div>
  );
}

export default App;

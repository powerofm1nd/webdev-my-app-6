import logo from './logo.svg';
import './css/App.css';
import styles from "./css/App.module.css";
import MyDialogue from "./MyDialogue.jsx"
import UserList from "./UserList.jsx"
import MyStyledButton from './MyStyledButton.jsx';
import MyStyledDiv from './MyStyledDiv.jsx';

function App() {
  return (
    <div className="App">
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyDialogue></MyDialogue>
        <UserList></UserList>
        <MyStyledButton text="My styled button" />
        <MyStyledDiv text="My styled div"/>
      </header>
    </div>
  );
}

export default App;

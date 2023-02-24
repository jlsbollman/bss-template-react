import BssLogo from "./bss/BssLogo";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BssLogo />
        <p>A template for a new React project!</p>
        <a className="App-link" href="/test">
          404 link
        </a>
      </header>
    </div>
  );
}

export default App;


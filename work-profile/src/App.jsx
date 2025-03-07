import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="profile">
          <a href="https://suraj.is-a.dev">Portfolio</a>
        </div>
        <div className="social"><a href="https://x.com/SurajMondal_Dev">X</a></div>
      </div>
      <div className="main">
        <div className="work">
          <h2>SIMPLE</h2>
          <div className="content">
            {/* Image size much be 1024x640 */}
            <a href="https://clay990.github.io/Projects/Rock%20Paper">
              <div className="card">
                <img src="./src/img/rock.png" alt="rock" />
                <h3>Rock Paper Scissor</h3>
              </div>
            </a>
            <a href="https://clay990.github.io/Projects/Weather%20site/">
              
              <div className="card">
                <img src="./src/img/weather.png" alt="weather" />
                <h3>Weather using API</h3>
              </div>
            </a>
            <a href="https://projects-lac-six.vercel.app/">
              
              <div className="card">
                <img src="./src/img/todo.png" alt="todo" />
                <h3>Todo App</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="work">
          <h2>REACT</h2>
          <div className="content">
            <a href="https://pokemon-self-omega.vercel.app">
              <div className="card">
                <img src="./src/img/pokemon.png" alt="pokemon" />
                <h3>Pokemon using API</h3>
              </div>
            </a>
            <div className="card">
              <h3>Working</h3>
            </div>
          </div>
        </div>
        <div className="work">
          <h2>MERN</h2>
          <div className="content">
          <div className="card">
              <h3>Soon</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="container">
      <div className='box'>
        <h2>Login</h2>
        <form>
          <div className='input-group'>
            <input type="text" required/>
            <label>Username</label>
          </div>
          <div className='input-group'>
            <input type="password" required/>
            <label>Password</label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

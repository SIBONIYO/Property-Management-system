import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <nav>PROPERTY MANAGEMENT SYSTEM</nav>
        <hr></hr>
      </header>
      
        <form className="formLoggin">
            <div className="username1">
            <lebel>Username:</lebel>
            <input className="inputA">
            </input>
            </div>
            <div className="password1">
              <lebel>Password:</lebel>
              <input
                className="inputB">
              </input>
            </div>
            <div className="buildingName">
            <lebel>Building name:</lebel>
            <input
              className="inputC">
            </input>
            </div>
        <div>
          <button className="buttonLogin">LogIn</button>
          <button className="buttonCancel">Cancel</button>
          </div>
          <a href="email" className="anchor1">Forgot your password?</a>
          <p className="p2">Login/Signin using your email</p>
          <a href="google.mail" className="anchor2">Google</a>
      </form>
      <div className="contuctUsLandingPage">
        <h3>Contact us </h3>
        <form>
          <div className="username2">
            <div>
          <div className="column2">
          <lebel for="firstName" className="Lebel">Name:</lebel>
              <input
                type="text"
            className="input2">
              </input>
              </div>
              <div  className="column2">
          <lebel for="Lname" className="Lebel"> Last name:</lebel>
              <input
                type="text"
             className="input3">
              </input>
              </div>
              <div  className="column2">
          <lebel for="email" className="Lebel">Email:</lebel>
              <input
                type="text"
            className="input4">
            </input>
              </div>
              </div>
            <div className="description">
          <lebel for="description" className="descriptionText">Description:</lebel>
          <textarea type="text" className="inputText">
          </textarea>
            <button className="submitbutton">Submit</button>
            </div>
          <div className="socialMedia">
            <a  href="whatsap" className="socialMedia">Whatsap </a>
            <a href="facebook" className="socialMedia">Facebook </a>
            <a href="twitter" className="socialMedia">Twitter </a>
            <a href="linkedinn"  className="socialMedia">LinkedInn </a>
          </div>
          </div>
        </form>
      </div>
      <footer className="footer">
        <hr></hr>
          <p> PMS @2021 </p>
        <hr></hr>
      </footer>
    </div>
    
  );
}

export default App;

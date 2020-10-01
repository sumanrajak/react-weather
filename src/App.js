import React, { useState, useEffect } from 'react';
import logo from './coop.jpg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'


const api ={
  key:"8d793bd9a2bccacce709f0a80859e766",
  base:"https://api.openweathermap.org/data/2.5/"


}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }
  
  const dateBuilder= (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  
  }

  
  return (
    <div className="App">
      <main>
      <Navbar collapseOnSelect expand="lg" bg='info ' variant="dark" >
  <Navbar.Brand href="#home"><font face = "Comic sans MS" >WEATHER app</font> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://www.indiatoday.in/news.html">NEWS</Nav.Link>
      <Nav.Link href="https://www.instagram.com/bong_boy_sr/?hl=en">INSTAGRAM</Nav.Link>
      <NavDropdown title="OTHER APPS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TO DO LIST</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">CHAT APP </NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">CONTACT</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       REMAINDER
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
       <div className='search-box'>
        
         <input className='search-bar' face = "Comic sans MS" placeholder='search...'
         onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}  />
          
          </div>
  
  
  
  {(typeof weather.main != "undefined") ? (
  <div>
    <div className="loc-date">
       <div className="location">{weather.name}, {weather.sys.country}</div>
      <div className="date">{dateBuilder(new Date())}</div>

     </div>
      <div className="weather"> 
       <div className="temp"> {Math.round(weather.main.temp)}°c</div>
       <div className="type">{weather.weather[0].main}</div>
               
               </div>

       </div>
       
       ) : ('no data')}

        </main>
        </div>
  );
}

export default App;

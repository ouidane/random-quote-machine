import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [qoute, setQoute] = useState({})
  const [color, setColor] = useState("")

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  useEffect(()=>{
    randomColor()
    fetchQoute()
  },[])

  const fetchQoute = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(response => setQoute(response))
      .catch(err => console.error(err));
  }

  const randomColor = () => {
    const hexColor = colors[Math.floor(Math.random()*colors.length)]
    setColor(hexColor)
  }

  const handelClick = () => {
    randomColor()
    fetchQoute()
  }

  return (
    <div className="app" style={{backgroundColor: `${color}`}}>
<     div id="quote-box" style={{color: `${color}`}}>
        <div className='quote-text'>
          <FontAwesomeIcon  icon={faQuoteLeft} />
          <span id="text">{qoute.content}</span>
        </div>
        <div className='quote-author'>
          <div id="author">- {qoute.author}</div>
        </div>
        <div className='buttons'>
          <div className="social-media-icons">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" ><FontAwesomeIcon style={{color: `${color}`}} icon={faTwitterSquare} /></a>
          <a id="tumblr-quote" href="https://www.tumblr.com/widgets" ><FontAwesomeIcon style={{color: `${color}`}} icon={faTumblrSquare} /></a>
          </div>
          <button id='new-quote' style={{backgroundColor: `${color}`, color: "#fff"}} onClick={handelClick}>New Quote</button>
        </div>
      </div>
    </div>
      
  )
}

export default App

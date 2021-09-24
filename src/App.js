import React from 'react'
import './input.css'
import Header from './components/Header'
import Search from './components/playlist/Search'
import './main.css'
import Playlist from './components/playlist/Playlist'
import PlayerState from './components/context/PlayerState'
import Controls from './components/Controls'

let App =() => {
  return (
    <PlayerState>
  <div className="App">
    <div className="inside_content">
      <Header/>
      <Search/>
      <Playlist/>
      </div>
      <Controls/>
    </div>
  </PlayerState>
  )
}
export default App
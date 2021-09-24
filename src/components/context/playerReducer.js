
  import {
    SET_CURRENT_SONG,
    TOGGLE_PLAYING,
    SET_SONGS_ARRAY,
  } from './types'

 let playerReducer= (state, action) => {
    switch (action.type) {
      case SET_SONGS_ARRAY:
        return {
          ...state,
          songslist: action.data,
        }
      case SET_CURRENT_SONG:
        return {
          ...state,
          currentSong: action.data,
          playing: true,
        }
      case TOGGLE_PLAYING:
        return {
          ...state,
          playing: action.data,
        }
      default:
        return state
    }
  }
  export default playerReducer
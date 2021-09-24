import React , {useContext} from 'react'
import playerContext from '../context/playerContext'
let Playlist=() => {
    const { SetCurrent, currentSong, songslist } = useContext(playerContext)

    return (
 <div className="playlist">
     <ul className="loi">
         {
             songslist.map((songs,i)=>(
                 <li className={'songContainer' + (currentSong === i ? 'selected' : '')}
                 key={i}
                 onClick={() => SetCurrent(i)}
               >
                 <div className="tmbn_song">{songs.like}
                     <i className="fa fa-thumbs-up"></i>
                 </div>
                 <div className="songmeta_playlist">
                     <span className ="songname">{songs.title}</span>
                     <span className ="songauthors">{songs.subtitle}</span>
                 </div>
                
                    
                   
                </li>
                ))}
     </ul>

</div>
    )
  }
export default Playlist
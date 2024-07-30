import './App.css';
import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';

const api = 'https://kitsu.io/api/edge/';

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}`)
      .then((res) => res.json())
      .then((data) => 
        setInfo(data)
      )
    }
  }, [text]);

  return (
    <>
      <div className='app'>
        <h1>batata</h1>
        <SearchInput value={text} onChange={(search) => setText(search) }/>
      </div>
      { info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App

import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './Components/NavBar'
import ListNews from './Components/ListNews';
import PageNavigation from './Components/PageNavigation';
import Error from './Components/Error'
import Nomatch from './Components/Nomatch'


function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [nbPages, setNbPages] = useState(0);
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(false);
  const [hitsPerPage, setHitsPerPage] = useState(15)
  const [errorIn, setErrorIn] = useState('')
  const titleRef = useRef();

  useEffect(() => {
    setErrorIn('');
    setLoading(true);
    fetchData();
    setLoading(false);
   const interval= setInterval(() => {
      fetchData();
    }, 300000)
    return () => clearInterval(interval);
  }, [query, hitsPerPage, page])

  

  const fetchData = async () => {
   
      await Axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story&page=${page}&hitsPerPage=${hitsPerPage}`)
        .then(response => { setData(response.data.hits);
        setNbPages(response.data.nbPages)
        })
        .catch(error => setErrorIn(error.message)) //setErrorIn with error.message here
        setLoading(true);
    
  }

  /* const queryData = (e) => {
    e.preventDefault()
    setQuery(search)
  } */

  const queryData = (e) => {
    e.preventDefault()
    if (search === '') {
      setQuery('')
    }
    else{
      setQuery(search);
    }
    setClick(false);
  }

  const handleNextClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
    setPage(prev => prev + 1)
    setClick(false);
  }

  const handleBackClick = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
    setPage(prev => prev - 1)
    setClick(false);
  }

  console.log(data)

  return (
    <div className='container'>
      <NavBar queryData={queryData} setSearch= {setSearch} titleRef={titleRef} setHitsPerPage={setHitsPerPage} setClick={setClick}/>
      {!loading ? <div className='spinner'> <ReactBootstrap.Spinner animation="border" />  <span>Loading... </span></div> :
      errorIn ? <Error errorIn={errorIn}/> : !data.length ? <Nomatch /> :
      <div>
      <ListNews loading={loading} data={data} setData={setData} click={click} setClick={setClick}/>
      <PageNavigation page={page} nbPages={nbPages} handleNextClick={handleNextClick} handleBackClick={handleBackClick} loading={loading} />
      </div> }
      </div>
  );
}

export default App;








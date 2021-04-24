import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './components/NavBar'
import ListNews from './components/ListNews';
import PageNavigation from './components/PageNavigation';
import Error from './components/Error'
import Nomatch from './components/Nomatch'


function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('') //because of tags=story: initial query is empty
  const [loading, setLoading] = useState(false);
  const [nbPages, setNbPages] = useState(0)
  const [page, setPage] = useState(1)
  const [hitsPerPage, setHitsPerPage] = useState(15)
  const [errorIn, setErrorIn] = useState('')



  useEffect(() => {
    setErrorIn('')
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000)
    return () => clearInterval(interval);
  }, [query, hitsPerPage, page])

  const fetchData = async () => {
    await Axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story&page=${page}&hitsPerPage=${hitsPerPage}`) //included &tags=story to avoid empty items
      .then(response => {
        setData(response.data.hits);
        setNbPages(response.data.nbPages)
      })
      .catch(error => setErrorIn(error.message)) //setErrorIn with error.message here
    setLoading(true);
  }

  const queryData = (e) => {
    e.preventDefault()
    // deleted conditional (but how to handle empty queries now?)
    setQuery(search)
  }

  const handleNextClick = () => {
    setPage(prev => prev + 1)
  }

  const handleBackClick = () => {
    setPage(prev => prev - 1)
  }

  console.log(data)
  return (
    <>
      <NavBar queryData={queryData} setSearch={setSearch} setHitsPerPage={setHitsPerPage} />
      {/* Intro of a very long conditional rendering */}
      {!loading ? <h1>Loading</h1> : errorIn ? <Error errorIn={errorIn} /> : !data.length ? <Nomatch /> :
        <>
          <ListNews loading={loading} data={data} />
          <PageNavigation page={page} nbPages={nbPages} handleNextClick={handleNextClick} handleBackClick={handleBackClick} loading={loading} />
        </>}
    </>
  );
}

export default App;








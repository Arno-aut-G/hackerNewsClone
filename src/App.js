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
  const [query, setQuery] = useState('...')
  const [loading, setLoading] = useState(false);
  const [nbPages, setNbPages] = useState(0)
  const [page, setPage] = useState(1)
  const [hitsPerPage, setHitsPerPage] = useState(15)
  const [errorIn, setErrorIn] = useState('')
  const [nomatch, setNomatch] = useState(false)


  useEffect(() => {
    setErrorIn('')
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000)
    return () => clearInterval(interval);
  }, [query, hitsPerPage, page])

  const fetchData = async () => {
    await Axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`)
      .then(response => {
        setData(response.data.hits);
        setNbPages(response.data.nbPages)
        if (response.data.hits.length === 0) {
          setNomatch(true)
        } else { setNomatch(false) }
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
      setQuery('...')
    } else {
      setQuery(search)
    }
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
      {errorIn && <Error errorIn={errorIn} setErrorIn={setErrorIn} />}
      {nomatch && <Nomatch setNomatch={setNomatch} />}
      <ListNews loading={loading} data={data} />
      <PageNavigation page={page} nbPages={nbPages} handleNextClick={handleNextClick} handleBackClick={handleBackClick} loading={loading} />
    </>
  );
}

export default App;








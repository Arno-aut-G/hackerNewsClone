import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './Components/NavBar'
import ListNews from './Components/ListNews';
import PageNavigation from './Components/PageNavigation';


function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false);
  const [nbPages, setNbPages] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetchData();
   const interval= setInterval(() => {
      fetchData();
    }, 300000)
    return () => clearInterval(interval);
  }, [query])

  const fetchData = async () => {
    if (query === '') {
      await Axios.get(`https://hn.algolia.com/api/v1/search?query=...&page=${page}`)
        .then(response =>  { setData(response.data.hits);
        setNbPages(response.data.nbPages) })
        .catch(error => console.log(error))
        setLoading(true);
    } else {
      await Axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
        .then(response => { setData(response.data.hits);
        setNbPages(response.data.nbPages) })
        .catch(error => console.log(error))
        setLoading(true);
    }
  }

  /* const queryData = (e) => {
    e.preventDefault()
    setQuery(search)
  } */

  const queryData = (e) => {
    e.preventDefault()
    if (search === '') {
      setQuery('...&hitsPerPage=25')
    } else {
      setQuery(search)
    }
  }

  const handleNextClick = () => {
    setPage(prev => prev + 1)
    fetchData();
  }

  const handleBackClick = () => {
    setPage(prev => prev - 1)
    fetchData();
  }

  console.log(data)

  return (
    <>
      <NavBar queryData={queryData} setSearch= {setSearch} />
      <ListNews loading={loading} data={data} />
      <PageNavigation page={page} nbPages={nbPages} handleNextClick={handleNextClick} handleBackClick={handleBackClick} />
    </>
  );
}

export default App;








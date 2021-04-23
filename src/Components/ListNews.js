import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const ListNews = ({loading, data, setData, click, setClick}) => {
  
  const handleListClick = (id) => {

    const getList = data.filter(e => {
      return e.objectID === id })
    setData(getList)
    setClick(!click);
   
  }
 

    return (
      <div className='list-items'>
        { loading ? <div className='news-list'>
        <ol>
          {data.map(e => (
            <li key={e.objectID} onClick={() => handleListClick(e.objectID)}>
              <h5>{e.title ? e.title : e.story_title}</h5>
              <a target="_blank" rel="noreferrer" href={e.url ? e.url : e.story_url}>{e.title ? e.title : e.story_title}</a>
              <div className={ click ? 'displayOn' : 'displayOff' }> 
                <div>
                  <p>Author: {e.author}</p>
                  <p>Date: {e.created_at}</p>
                  <p>Comments: {e.num_comments}</p>
                  <p>Points: {e.points}</p>
                </div>
              </div>
            </li>
          ))} 
        </ol>
      </div> : <div className='spinner'> <ReactBootstrap.Spinner animation="border" /> Loading... </div> }
      </div>
    );
    
}

export default ListNews;
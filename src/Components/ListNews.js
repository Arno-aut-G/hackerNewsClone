import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const ListNews = ({loading, data, setData, click, setClick}) => {
  
  const handleListClick = (id) => {

    const getList = data.filter(e => {
      return e.objectID === id })
    setData(getList)
    setClick(true);
   
  }
 

    return (
      <div className='list-items'>
        <div className='news-list'>
        <ul>
          {data.map(e => (
            <li key={e.objectID}>
              <h5 onClick={() => handleListClick(e.objectID)}>
                {e.title ? e.title : e.story_title} </h5>
              <a target="_blank" rel="noreferrer" href={e.url ? e.url : e.story_url}>
                    Read More..</a>
              <div className={ click ? 'displayOn' : 'displayOff' }> 
                <div>
                  <p>Author: {e.author}</p>
                  <p>Date: {e.created_at}</p>
                  <p>Comments: {e.num_comments}</p>
                  <p>Points: {e.points}</p>
                </div>
                <a href='index.html'>Back to Home</a>
              </div>
            </li>
          ))} 
        </ul>
      </div>
      </div>
    );
    
}

export default ListNews;
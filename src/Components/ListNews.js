import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const ListNews = ({ loading, data }) => {

  return (
    <>
      { loading ? <div className='news-list'>
        <ul className='list-items'>
          {data.map(e => (
            <li key={e.objectID}>
              <h5>{e.title ? e.title : e.story_title}</h5>
              <a target="_blank" rel="noreferrer" href={e.url ? e.url : e.story_url}>{e.url ? e.url : e.story_url}</a>
            </li>
          ))}
        </ul>
      </div> : <div className='spinner'> <ReactBootstrap.Spinner animation="border" /> Loading... </div>}
    </>
  );

}

export default ListNews;
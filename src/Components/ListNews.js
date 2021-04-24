import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const ListNews = ({ loading, data, page, hitsPerPage }) => {
  // const start = (page - 1) * hitsPerPage + 1 with attribute start={`${start}`

  return (
    <>
      { loading ? <div className='news-list'>
        <ol className='list-items'>
          {data.map(e => (
            <li key={e.objectID}>
              <h5>{e.title ? e.title : e.story_title}</h5>
              <a target="_blank" rel="noreferrer" href={e.url ? e.url : e.story_url}>{e.url ? e.url : e.story_url}</a>
            </li>
          ))}
        </ol>
      </div> : <div className='spinner'> <ReactBootstrap.Spinner animation="border" /> Loading... </div>}
    </>
  );

}

export default ListNews;
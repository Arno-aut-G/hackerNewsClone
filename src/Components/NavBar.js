import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const NavBar = ({queryData, setSearch}) => {
    return (
    <>
      <div className='navbar'>
        <div><h1>HackerNews </h1></div>
        <div>
        <ReactBootstrap.Form onSubmit={queryData} >
          <ReactBootstrap.Form.Row>
            <ReactBootstrap.Col xs="auto">
          <ReactBootstrap.Form.Control type="text" placeholder="Search here.." onChange={(e) => setSearch(e.target.value)} />
          </ReactBootstrap.Col>
          <ReactBootstrap.Col xs="auto">
          <ReactBootstrap.Button variant="outline-dark" type="submit">Search</ReactBootstrap.Button>
          </ReactBootstrap.Col>
          </ReactBootstrap.Form.Row>
        </ReactBootstrap.Form>
        </div>
    </div>
    </>
    )
}

export default NavBar;
import React, { useRef }from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const NavBar = ({queryData, setSearch, titleRef, setHitsPerPage, setClick}) => {

    const handleHitsPerPage = (n) => {
      setHitsPerPage(n);
    }
    return (
    <>
      <div className='navbar' ref={titleRef}>
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
        <div>
          <ReactBootstrap.DropdownButton variant="dark" id="dropdown-basic-button" title="Items per page">
            <ReactBootstrap.Dropdown.Item onClick={handleHitsPerPage(15)}>15</ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item onClick={handleHitsPerPage(25)}>25</ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item onClick={handleHitsPerPage(50)}>50</ReactBootstrap.Dropdown.Item>
          </ReactBootstrap.DropdownButton>
        </div>
      </div>
    </>
    )
}

export default NavBar;
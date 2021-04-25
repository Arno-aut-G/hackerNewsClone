import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const NavBar = ({queryData, setSearch, titleRef, setHitsPerPage, setClick}) => {

    
    return (
    <>
      <div className='navbar' ref={titleRef}>
        <div><h1> HackerNews </h1></div>
        <div>
        <ReactBootstrap.Form onSubmit={(e) => {
                queryData(e); 
                e.target.reset(); 
                setSearch('');
                }} >
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
          <ReactBootstrap.DropdownButton variant="outline-dark" id="dropdown-basic-button" title="Items per page">
            <ReactBootstrap.Dropdown.Item onClick={() => setHitsPerPage(20)}>20</ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item onClick={() => setHitsPerPage(25)}>25</ReactBootstrap.Dropdown.Item>
            <ReactBootstrap.Dropdown.Item onClick={()=> setHitsPerPage(50)}>50</ReactBootstrap.Dropdown.Item>
          </ReactBootstrap.DropdownButton>
        </div>
      </div>
    </>
    )
}

export default NavBar
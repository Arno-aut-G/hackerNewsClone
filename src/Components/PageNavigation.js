import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';

const PageNavigation = ({ page, nbPages, handleNextClick, handleBackClick, loading }) => {

  return (
    <>
      <div className={loading ? 'footer' : 'displayOff'}>
        <div>
          <ReactBootstrap.Button variant="dark" onClick={handleBackClick} disabled={page === 1}>Back</ReactBootstrap.Button>
          <span>{page}</span>
          <ReactBootstrap.Button variant="dark" onClick={handleNextClick} disabled={page === nbPages}>Next</ReactBootstrap.Button>
        </div>
      </div>
    </>
  );
}

export default PageNavigation;
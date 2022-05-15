import React from 'react';
import Modal from './Modal';
import ViewUsers from './viewUsers';
import '../App.css';

function HomePage() {

  return (
    <div className="p-3">
      <ViewUsers/>
      <Modal />
    </div>
  );
}

export default HomePage;

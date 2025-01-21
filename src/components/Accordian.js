import React from 'react';
import ListItems from './ListItems';

const Accordian = ({ title, isOpen, toggleOpen }) => {
  return (
    <div className='my-1 shadow-md border border-gray-200 px-4 py-2 w-64'>
      <div className='flex justify-between'>
        <h1>{title}</h1>
        <button
          className='bg-black text-white px-2 rounded-md'
          onClick={toggleOpen}
        >
          {isOpen ? 'Hide' : 'Show'}
        </button>
      </div>
      {isOpen && <ListItems />}
    </div>
  );
};

export default Accordian;

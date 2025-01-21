import { useState } from 'react';
import Accordian from '../components/Accordian';

const Men = () => {
  // Initialize an array of booleans to keep track of the open state for each accordion
  const [openStates, setOpenStates] = useState([false, false, false, false]);

  // Toggle the open state of a particular accordion
  const toggleAccordion = (index) => {
    // Set all the accordion states to false except for the one that was clicked
    setOpenStates((prevState) => {
      const newStates = Array(openStates.length).fill(false); // Close all accordions
      newStates[index] = !prevState[index]; // Toggle the clicked accordion
      return newStates;
    });
  };

  return (
    <div className='flex flex-row items-center justify-center min-h-screen bg-gray-50 p-6'>
      <div className='mr-14'>
        <h1 className='text-4xl font-bold text-gray-800 mb-6'>Men Page</h1>
        <img
          className='max-w-full h-auto rounded-lg shadow-lg'
          src='https://media.istockphoto.com/id/1214561965/photo/young-man-in-shopping-looking-for-presents-consumerism-fashion-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=G1n6f4oQ6om156yTJgdKiQ8_Mn6KqtKAHHXDY0-4f3Q='
          alt='men'
        />
      </div>
      <div>
        {['Brand', 'Gender', 'Kids', 'Other'].map((title, index) => (
          <Accordian
            key={index}
            title={title}
            isOpen={openStates[index]}
            toggleOpen={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Men;


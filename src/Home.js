import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import Nava from './Navbar';
import TodayDate from './components/date';

function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const currentDate = new Date().toISOString().split('T')[0]; 

  useEffect(() => {
    setSelectedDate(currentDate); 
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      fetch(`http://localhost:8080/api/entries?game=${selectedDate}`, {
        method: 'GET',
        mode: 'cors',
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setIsLoading(false);
          setContent(data.content);
          setTitle(data.title);
        })
        .catch(err => console.error('Error fetching data:', err));
    }
  }, [selectedDate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to server
      const response = await fetch('http://localhost:8080/api/entry', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        // Handle success
        console.log('Form data submitted successfully!');
      } else {
        // Handle error
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Container fluid>
      <m.div
        id='home'
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Nava />
        <center>
          <form id="form" onSubmit={handleSubmit}>
            <h1><TodayDate selectedDate={selectedDate} /></h1>
            <input
              placeholder='             Title'
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              id="main"
              value={content}
              onChange={handleContentChange}
            />
            <input id='submit' type='submit' value={'Save'} />
          </form>
        </center>
      </m.div>
    </Container>
  );
}

export default Home;

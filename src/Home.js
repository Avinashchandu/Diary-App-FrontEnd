import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion as m } from 'framer-motion';
import Nava from './Navbar';
import TodayDate from './components/date';

function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to server
      const response = await fetch('http://localhost:8080/api/submit-form', {
        method: 'POST',
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
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Nava />
        <center>
          <form id="form" onSubmit={handleSubmit}>
            <h1><TodayDate /></h1>
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

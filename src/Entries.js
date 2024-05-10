import './App.css';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'react-router-dom';
import { motion as m } from 'framer-motion';
import Nava from './Navbar';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateCalendar } from '@mui/x-date-pickers';


function Entries()
{



    const [selectedDate, setSelectedDate] = useState(null); 
     const [selectTitle, seselectTitle] = useState(null); 
      const [selectContent, seselectContent] = useState(null); 
  const handleDateChange = (date) => {
    
    const date1 = new Date(date.$d);
  
  
  const year = date1.getFullYear();
  const month = String(date1.getMonth() + 1).padStart(2, '0');
  const day = String(date1.getDate()).padStart(2, '0');
  const htmlDateFormat = `${year}-${month}-${day}`;
    console.log(htmlDateFormat);
    setSelectedDate(htmlDateFormat
    ); 
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/entries?game=${selectedDate}`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        seselectTitle(data.title);
        seselectContent(data.content);
        console.log(selectTitle);
        console.log(selectContent);
    })
    .catch(err => console.error('Error fetching data:', err));
}, [selectedDate,selectTitle,selectContent]); 
    return(
    <Container fluid>
        <m.div id='entries'
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ x: "100%" }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}>
            <Nava />

            <div id='containerEntries'>
                <div id='datepicker'>
                <LocalizationProvider dateAdapter={AdapterDayjs} id='date'>
      <DateCalendar
        orientation="landscape"
        onChange={handleDateChange} 
      />
     <div>
 
</div>

    </LocalizationProvider>

                </div>
                <div id='contentshower'>
                  <center>
                    <p>Title: {selectTitle}</p>
                    <p>{selectContent}</p>
                    </center>
                </div>
            </div>
        

        </m.div>
    </Container>
    );

}
export default Entries;
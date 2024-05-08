import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import 'react-router-dom';
import { motion as m } from 'framer-motion';
import Nava from './Navbar';


function Entries()
{
    return(
    <Container fluid>
        <m.div id='entries'
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ y: "100%" }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}>
            <Nava />
        

        </m.div>
    </Container>
    );

}
export default Entries;
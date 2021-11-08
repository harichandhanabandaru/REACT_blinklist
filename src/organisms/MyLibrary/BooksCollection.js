import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from './Header';
// import Title from '../../atoms/Title/Title';

import { Container } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box paddingTop={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
}));

const SimpleTabs = ({ search }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [books,setBooks]=useState([])
  
  useEffect(() => {
    fetch('http://localhost:8000/read')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });
  }, []);


  const handleClick = async (id, status) => {

    let tempBook={};
    for(let i=0;i<books.length;i++)
    {
        if(books[i].id === id)
        { 
          if(status==='true'){
          status='false';
          }
          else{
          status='true';
          }
          books[i].status=status.toString();
          tempBook=books[i];
        }
    }

    await fetch('http://localhost:8000/read/' + id, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(tempBook)
      
    });

    await fetch('http://localhost:8000/read')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });

  }; 
  

  const result=books;
  
  return (
    <Container maxWidth="md">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            // className="center-navbar"
          >
            <Tab label="Continue Reading" {...a11yProps(0)} />
            <Tab label="Finished " {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {books && (
            <Header
              name="Completed"
              books={result}
              status={"true"}
              onClick={(id, status) => handleClick(id, status)}
            />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {books && (
            <Header
              name="Read again"
              books={result}
              status={"false"}
              onClick={(id, status) => handleClick(id, status)}
            />
          )}
        </TabPanel>
    </Container>
  );
};

export default SimpleTabs;
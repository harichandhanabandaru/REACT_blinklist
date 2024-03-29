import React from 'react';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';
const Header = ({name,books,status,onClick}) => {

    if(books!==null){
    const allbooks = books.map((item) => {
        
          if (item.status ===status){
            return (
              <Grid item xs={4}>
                <BookCard name={name} title={item.title} author={item.author} category={item.category} time={item.time} image={item.image} onClick={()=>onClick(item.id,status)} visible={true}/>
              </Grid>
            );
          }
        });
      
    return ( 
        
        <Grid container spacing={2}>
        {allbooks}
        </Grid>
    
     );
    }
};
 
export default Header;
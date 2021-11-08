import React from 'react';
import BookCard from './BookCard';
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";

export default function LibraryBooks ({result,library,callBack}) {
    let visible=true;
    console.log(library);
    console.log(result);
    const searchVisible = id => {
        //counter=1;
        console.log(result);
    
        if(library)
        {
          
          for(let i=0;i<library.length;i++)
          {
              if(library[i].id===id)
              {
              
                return true;
              }
          }
          
        }
      };

    const allbooks = result.map((item) => {
     
        if(searchVisible(item.id))
        {
          visible=false;
        }
        else
        {
          visible=true;
        }
        return (
          <Grid item 
          >
            <BookCard name='+Add to library' title={item.title} author={item.author} image={item.image} category={item.category} time={item.time} onClick={()=>callBack(item.id, item.title, item.author,item.image, item.category, item.time)} visible={visible}/>
          </Grid>
        );
        
      });

      return (
        <Container align-items="center">
          <Grid container breakpointCols={5} spacing={1}>
            {/* container spacing={2} */}
            {allbooks}
          </Grid>
        </Container>
      );
}

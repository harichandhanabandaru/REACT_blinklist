import React from 'react';
import Grid from "@material-ui/core/Grid";
import BookCard from "../../molecules/Book/BookCard";

export default  function ExploreCheck(note)
{    
    return (
      <div>
        <Grid item key={note.id}>
          <BookCard
            name={"name"}
            title={note.title}
            author={note.author}
            category={note.category}
            time={note.time}
            image={note.image}
            // onClick={() => onClick(note.id, note.status)}
            visible={true}
          />
        </Grid>
      </div>
    );
}


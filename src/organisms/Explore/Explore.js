import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import BookCard from "../../molecules/Book/BookCard";

function Explore(props) {

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) =>
        data.filter((note) => note.category ==  props.category)
      ) 
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Container align-items="center">
        <Grid container breakpointCols={5} spacing={3}>
          { notes.map((note) => (
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
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Explore;

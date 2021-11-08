import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "../../atoms/Button/CardButtons";
import Typography from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  textsize:{
      fontSize:12
  },
   content:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
});

export default function BookCard({
  name,
  title,
  author,
  image,
  category,
  time,
  functioncalling,
  visible
}) {
/*
   const insertfun = async(id, note) => {
     //console.log("sdfjklka;lbnjvkmd" + id + "  " + note);
     //  alert("gfffffffdshj")
     const temp = {
       id: note.id,
       title: note.title,
       author: note.author,
       time: note.time,
       category: note.category,
       image: note.image,
       status: false,
     };

     try {
      // alert("inside bookcard")
       let res = fetch("http://localhost:8000/notes" + id , {
         method: "PUT",
         mode: "CORS",
         body: JSON.stringify(this.state.empProjects),
         headers: {
           "Content-Type": "application/json",
         },
       });
       return res.json();
     } catch (err) {
       return err;
     }
   };
*/

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={image} width="300px" height="300px" alt="" loading="lazy" />
        <Typography gutterBottom variant="title" component="h3" noWrap>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="subtitle1" component="h5">
          {author}
        </Typography>
        <Typography className={classes.textsize}>{category}</Typography>
        <Typography color="textSecondary">
          <ListItem className={classes.content}>
            <AccessTimeIcon />
            <strong> {time} min</strong>
          </ListItem>
        </Typography>
      </CardContent>
      {visible && (
        <CardActions>
          <Button
            // name={name}
            name={"Add to Library"}
            size="small"
            color="secondary"
            // // onClick={alert("clicked")}
            // onClick={alert("o")}
            // onClick={functioncalling}
            // onClick={alert(id+"  "+note)}
            onClick={functioncalling}
            endIcon={null}
          >
            Add to lib
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

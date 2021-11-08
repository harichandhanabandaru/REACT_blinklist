import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "../../atoms/Button/CardButtons";
import Typography from "@material-ui/core/Typography";
import { ListItem } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import IconButton from "@material-ui/IconButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./ReadingCard.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  textsize: {
    fontSize: 12,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ReadingCard({
  id,
  name,
  title,
  author,
  image,
  category,
  time,
  //   onClick,
  visible,
}) {
  const classes = useStyles();
  //const [notes, setNotes] = useState([]);


  // const handleDelete = async () => {
  //   alert("id id",id)
  //   await fetch("http://localhost:8000/read/" + id, {
  //     method: "DELETE",
  //   });

  //   // const newNotes = notes.filter((note) => note.id != id);
  //   // setNotes(newNotes);
  // };

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
            {time} min
          </ListItem>
        </Typography>
        <Typography className="center-navbar">
          <MoreHorizIcon />
          {/* <Button
            // name={<MoreHorizIcon />}
            name={"Read"}
            size="10px"
            color="black"
            onClick={handleDelete()}
          />
          <Button
            // name={<MoreHorizIcon />}
            name={"Remove"}
            size="small"
            color="black"
            endIcon={null}
          /> */}
        </Typography>
      </CardContent>
    </Card>
  );
}

import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  FormControlLabel,
  FormLabel,
  makeStyles,
  FormControl,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Details } from "@material-ui/icons";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
// import { FormControl } from '@material-ui/core'
// import { FormLabel } from '@material-ui/core'
// import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Popup.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
export default function AddBook({ modelsetfun }) {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);

  const [author, setauthor] = useState("");
  const [authorError, setauthorError] = useState(false);

  const [time, setTime] = useState("");
  const [timeError, setTimeError] = useState(false);

  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);

  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(false);

  const [status, setStatus] = useState("true");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setauthorError(false);
    setTimeError(false);
    setCategoryError(false);
    setImageError(false);
    alert("submitted");

    if (title == "") {
      setTitleError(true);
    }
    if (author == "") {
      setauthorError(true);
    }
    if (time == "") {
      setTimeError(true);
    }
    if (category == "") {
      setCategoryError(true);
    }
    if (image == "") {
      setImageError(true);
    }

     if (title && author && time && category && image) 
    {
      console.log(title, author, category);
      // alert(title, author, category, time, image, status);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, author, category, time, image, status }),
      }).then(() => history.push("/"));
      
    }
    
  };
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  const sendData = () => {
    const tempBook = {
      title,
      author,
      category,
      image: "image.png",
      time,
      status: "true",
    };

    fetch("http://localhost:8000/allBooks/", {
      method: "POST",
      body: JSON.stringify(tempBook),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon  />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="dialogPaper"
      >
        {/* <div className="popup-inner"> */}

        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Book
        </DialogTitle>

        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Insert a book
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.field}
            label="Book Title"
            variant="outlined"
            color="secondary"
            // fullWidth
            width="200px"
            multiline
            rows={2}
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setauthor(e.target.value)}
            className={classes.field}
            label="Author"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={authorError}
          />
          <TextField
            onChange={(e) => setTime(e.target.value)}
            className={classes.field}
            label="Time"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setCategory(e.target.value)}
            className={classes.field}
            label="Category"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            className={classes.field}
            label="Image link"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          {/* <FormControl className={classes.field}>
            <FormLabel>Note category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
            
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="remainders"
              />
            </RadioGroup>
          </FormControl> */}
          <Button
            type="Submit"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Dialog>
    </div>
  );
}

import { useState } from "react";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import { Add, Delete as DeleteIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "280px",
      background: "#8888",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      //   justifyContent: "center",
      padding: theme.spacing(2),
    },

    textField: {
      width: "100%",
    },

    addNotes: {
      display: "flex",
      gap: 2,
    },
  })
);

interface Note {
  id: number;
  text: string;
}

export default function Home() {
  const classes = useStyles();
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteText, setNewNoteText] = useState("");

  const handleAddNote = () => {
    const newNote: Note = {
      id: notes.length + 1,
      text: newNoteText,
    };
    setNotes([...notes, newNote]);
    setNewNoteText("");
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>Notes App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Notes
        </Typography>
        <Box className={classes.addNotes}>
          {" "}
          <TextField
            variant="filled"
            label="New note"
            multiline
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            className={classes.textField}
          />
          <Button variant="contained" color="primary" onClick={handleAddNote}>
            <Add />
          </Button>
        </Box>

        <List>
          {notes.map((note) => (
            <ListItem key={note.id}>
              <ListItemText primary={note.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

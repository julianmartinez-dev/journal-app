import { useMemo } from 'react';
import { TurnedInNot } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";
import { INote, setActiveNote } from "../../store/journal";
import { useDispatch } from 'react-redux';

interface Props{
    note: INote;
}

export const SideBarItem = ({ note } : Props) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return note.title.length > 17 ? `${note.title.substring(0, 17)}...` : note.title;
    }, [note.title]);

    const onSetActiveNote = () => {
        dispatch(setActiveNote(note));
    }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onSetActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
}

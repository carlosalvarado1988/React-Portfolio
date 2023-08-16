import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

interface IAppProps {}

export const Demos: React.FunctionComponent<IAppProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h1" component="div">
        Demos
      </Typography>
      <List>
        <ListItem onClick={() => navigate('demos/images-explore')}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Three js" />
        </ListItem>
      </List>
    </Grid>
  );
};

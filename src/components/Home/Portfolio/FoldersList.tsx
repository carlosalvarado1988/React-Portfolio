import { useNavigate } from 'react-router-dom';
import { Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

export const FoldersList: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <List>
          <ListItem onClick={() => navigate('demos/images-explore')}>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant="h5">Exploring Three.js</Typography>} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

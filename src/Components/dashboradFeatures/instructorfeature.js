import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Pop from './dashboardPopup'
import Instructors from '../Instructor/ListOfIinstructor'


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
          maxWidth: '100%',
          minHeight: 220,
          marginTop:20
    },
    media: {
      height: 20,
      paddingTop: '12.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
    avatar: {
      backgroundColor: green[500],
    },
  }),
);

export default function Instructorfeature() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const popupInstructors = () => {
    setExpanded(true);
  };

  return (
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={popupInstructors}>
            <MoreVertIcon  />
          </IconButton>
        }
        title="Instructors"
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Box textAlign={"center"}>
           <PersonIcon fontSize='large'/>
        </Box>
          
          </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
         </IconButton>
              <Box>
               <Typography variant="body2" color="textSecondary" component="span">
                  Profile
               </Typography>
              </Box>
   
      </CardActions>
      

      </Card>
      
     
   
  

  );
}
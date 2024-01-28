import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react';
import food01 from '../assets/Images/food01.jpg';
import food02 from '../assets/Images/food02.jpg';
import food03 from '../assets/Images/food03.jpg';
import place01 from '../assets/Images/place01.jpg';
import place02 from '../assets/Images/place02.jpg';

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
    <Box position='fixed' width='300'>

      <Typography variant='h6'>Online Friends
      <AvatarGroup max={6} sx={{marginTop:1 , paddingRight:15}}>
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=1&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=5&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=6&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=25&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=15&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=65&gender=male' />
            <Avatar alt="Remy Sharp" src='https://picsum.photos/200/300?random=55&gender=male' />
      </AvatarGroup>
      </Typography>


      <Box sx={{margin:'5% 5% 0 0 '}} >

      <Typography variant='h6'>
        Latest Pics
      </Typography>
        <ImageList  cols={3} rowHeight={164} gap='10px'>
          
            <ImageListItem>
              <img
                src={food01}
                loading="lazy"
              />
            </ImageListItem>
         
            <ImageListItem>
              <img
                src={place01}
                loading="lazy"
              />
            </ImageListItem>
         
            <ImageListItem>
              <img
                src={place02}
                loading="lazy"
              />
            </ImageListItem>
      </ImageList>
    </Box>

    <Box mt={3}>
 
        <Typography variant='h6'>
          Latest Conversation
        </Typography>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:'-5px'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Femy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Now its gonna time for vocation"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Aemy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Wow!! could we hangover"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </List>
    </Box>

      </Box>

    </Box>
 
  )
}

export default Rightbar
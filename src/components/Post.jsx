import React from 'react';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import feedImg from '../assets/Images/img02.jpg'
import feedImg2 from '../assets/Images/place01.jpg'
import feedImg3 from '../assets/Images/place03.jpg'

const Post = () => {
  return (
    <div>
          <Card sx={{margin:5}} >
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          F
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon/>
                      </IconButton>
                  }
                  title="Accept and Embrace Yourself "
                  subheader="January 26, 2024"
              />
              <CardMedia
                  component="img"
                  height="13%"
                  image={feedImg}
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      Your uniqueness is your power, and your strength lies in the acceptance of your true self. Shine with authenticity and your authenticity is the key to unlocking the extraordinary within you."
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                      <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>


          <Card sx={{margin:5}} >
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          A
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Explore New Enjoy Your Own "
                  subheader="January 25, 2024"
              />
              <CardMedia
                  component="img"
                  height="13%"
                  image={feedImg2}
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      Your uniqueness is your power, and your strength lies in the acceptance of your true self. Shine with authenticity and your authenticity is the key to unlocking the extraordinary within you."
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                      <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                  </IconButton>
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>
              </CardActions>
          </Card>



          <Card sx={{margin:5}} >
              <CardHeader
                  avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          G
                      </Avatar>
                  }
                  action={
                      <IconButton aria-label="settings">
                          <MoreVertIcon />
                      </IconButton>
                  }
                  title="Escape From The Reality Fortnite!!"
                  subheader="January 25, 2024"
              />
              <CardMedia
                  component="img"
                  height="13%"
                  image={feedImg3}
                  alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                      Your uniqueness is your power, and your strength lies in the acceptance of your true self. Shine with authenticity and your authenticity is the key to unlocking the extraordinary within you."
                  </Typography>
              </CardContent>
              <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                      <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />

                  </IconButton>
                  <IconButton aria-label="share">
                      <ShareIcon />
                  </IconButton>

              </CardActions>

          </Card>




    </div>
  )
}

export default Post
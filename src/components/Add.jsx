import { Avatar, Box, Button, Fab, IconButton, Modal, TextField, Tooltip, Typography, styled } from '@mui/material'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Profile from '../assets/Images/img01.jpg';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
   
})

const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
  return (
    <div>
          <Tooltip onClick={(e)=>{setOpen(true)}} title="Customize" sx={{position:'fixed',bottom:20, left:{xs:'calc(50% - 25px)',md:30}}}>
              <IconButton>
                  <Fab color="primary" aria-label="add">
                      <AddIcon  />
                  </Fab>
              </IconButton>
          </Tooltip>
          <Modal
          
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <Box bgcolor={"background.default"} color={"text.primary"} width={500} height={380} p={3} borderRadius={5} justifyContent='center' alignItems='center'>
                 <Typography variant='h6' color='gray' textAlign='center' >Create Post</Typography>
             
              <UserBox>
              <Avatar src={Profile} sx={{width:50, height:50,marginTop:'20px'}} > </Avatar>
              <Typography mx={2} mt={2} fontSize={20}  variant='span' fontWeight={600}>Md Faizu</Typography>
              </UserBox>
                  <TextField
                  sx={{width:'100%',marginTop:'20px'}}
                      id="standard-multiline-static"
                      multiline
                      rows={3}
                    
                      placeholder="what's on your mind"
                      variant="standard"
                  />
                  <Box mt={2} display='flex' gap="10px">

                      <EmojiEmotionsIcon color='primary' />
                      <CollectionsIcon color='secondary' />
                      <VideoCameraBackIcon color='danger'/>
                      <PersonAddIcon color='success'/>
                  </Box>
                  <Button sx={{marginTop:'30px', width:'100%'}} variant="contained" >
                      Post
                  </Button>
              </Box>

          </Modal>

    </div>
  )
}

export default Add
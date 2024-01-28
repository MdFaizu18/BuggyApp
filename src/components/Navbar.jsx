import PestControlSharpIcon from '@mui/icons-material/PestControlSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { Box,AppBar,Toolbar, styled, Typography, InputBase, Badge, Avatar,Menu,MenuItem } from '@mui/material'
import React from 'react';
import Myimg from '../assets/Images/img01.jpg';

const WrapperToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between',
  background:'black'
});

const WrapperSearch = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:'0px 10px',
  borderRadius:theme.shape.borderRadius,
  width:'40%'
}));

const WrapperIcons = styled(Box)({
  cursor:'pointer',
  display:'flex',
  gap:'20px',
  justifyContent:'center',
  alignItems:'center'

});

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };



  return (
    <Box >
      <AppBar position="fixed">
      <WrapperToolbar>
      {/* for logo name  */}
      <Box display='flex' alignItems='center' gap='10px'>
      <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' },cursor:'pointer', }}>
              Buggy
      </Typography>
        <Box display='flex' alignItems='center' >
              <PestControlSharpIcon sx={{ fontSize: 32,}} />
        </Box>
      </Box>  

      {/* for logo when screen is small  */}
      {/* <PestControlSharpIcon sx={{display:{xs:'block',sm:'none'},fontSize:'30px'}}/> */}
      {/* for input text field  */}
      <WrapperSearch><InputBase placeholder='search...'/></WrapperSearch>
      {/* for icons  */}
      <WrapperIcons>
         <Badge badgeContent={4} color='error'>
          <MailIcon/>
         </Badge>
         <Badge badgeContent={2} color='error'>
              <NotificationsIcon/>
         </Badge>
            {/* <Avatar src='https://picsum.photos/200/300?random=19' /> */}
            <Avatar src={Myimg} onClick={(e)=>setOpen(true)}/>
      </WrapperIcons>
      </WrapperToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e)=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </AppBar>
    </Box>
  )
}

export default Navbar
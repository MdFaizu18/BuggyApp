import React from 'react'
import { Box,Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const WrapperBox = styled(Box)({
  fontWeight:'600'
})


const Sidebar = ({setMode, mode}) => {
  return (
    <WrapperBox  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
    
    <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Home Page
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#pages'>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Pages
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#groups'>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                Groups
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Market Place
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#friends'>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Friends
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#settings'>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Settings
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  Profile
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#profile'>
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch onChange={(e)=>{setMode(mode === 'light'?'dark':'light')}}/>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </WrapperBox>
  )
}

export default Sidebar
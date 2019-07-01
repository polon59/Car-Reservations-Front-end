import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Voicemail from '@material-ui/icons/Voicemail'
import Mail from '@material-ui/icons/Mail'
import ListAlt from '@material-ui/icons/ListAlt'
import Home from '@material-ui/icons/Home'
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    backgroundColor:'rgb(214, 0, 0)',
    width: '100%',
  },
  item:{
      marginLeft: 20,
      marginRight: 20,
      color: 'rgb(255, 255, 255)'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo:{
      maxHeight : 56,
      width: 'auto',
      padding : 6
  }
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const pageTitle = 'Oryginalne logo'

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem component={Link} to={'/'} onClick={this.handleMobileMenuClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} to={'/offer'} onClick={this.handleMobileMenuClose}>
          Our cars
        </MenuItem>
        <MenuItem component={Link} to={'/contact'} onClick={this.handleMobileMenuClose}>
          Contact
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu> 
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.root} position="fixed">
          <Toolbar>
              <img src="./resources/logo.png" className={classes.logo} alt="page logo"/>
            {/* <Typography className={classes.sectionMobile} variant="h6" color="inherit" noWrap>
              {pageTitle}
            </Typography> */}

            {/* <Typography className={classes.sectionDesktop} variant="h6" color="inherit" noWrap>
              {pageTitle}
            </Typography> */}
            <div className={classes.grow} />
                <div className={classes.sectionDesktop}>

                <MenuItem className={classes.item} color="inherit" component={Link} to={'/'}>
                    Home
                    <Home className='navIcon'/>
                </MenuItem>
                <MenuItem className={classes.item} color="inherit" component={Link} to={'/offer'}>
                    Our cars
                    <Voicemail className='navIcon'/>
                </MenuItem>
                <MenuItem className={classes.item} color="inherit" component={Link} to={'/contact'}>
                    Contact
                    <Mail className='navIcon'/>
                </MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={2} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

                <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                    >
                    <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui

import {
  Avatar,
  Card,
  CardContent,
  makeStyles,
  useTheme,
  Chip,
  ButtonBase,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
  ListItem,
} from '@material-ui/core';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from '../../../../ui-component/cards/MainCard.js';
import Transitions from '../../../../ui-component/extended/Transitions.js';

// assets
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    maxWidth: '350px',
    minWidth: '300px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  headerAvatar: {
    cursor: 'pointer',
    ...theme.typography.mediumAvatar,
    margin: '8px 0 8px 8px !important',
  },
  profileChip: {
    height: '35px',
    alignItems: 'center',
    borderRadius: '10px',
    marginRight: '5px',
    border: 'none',
    transition: 'all .2s ease-in-out',
    background: '#E2ECF6',
    color: '#1275D1',
    '&[aria-controls="menu-list-grow"], &:hover': {
      background: '#1275D1 !important',
      color: theme.palette.secondary.light,
      '& svg': {
        stroke: theme.palette.secondary.light,
      },
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: '12px',
  },
  listItem: {
    marginTop: '5px',
  },
  cardContent: {
    padding: '20px 8px !important',
    width: '250px',
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: '16px',
    marginTop: '16px',
  },
  searchControl: {
    width: '100%',
    paddingRight: '8px',
    paddingLeft: '16px',
    marginBottom: '16px',
    marginTop: '16px',
  },
  startAdornment: {
    fontSize: '1rem',
    color: theme.palette.grey[500],
  },
  flex: {
    display: 'flex',
  },
  name: {
    marginLeft: '2px',
    fontWeight: 400,
  },
  ScrollHeight: {
    height: '100%',
    maxHeight: 'calc(100vh - 250px)',
    overflowX: 'hidden',
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: '#fff',
  },
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const [sdm, setSdm] = React.useState(true);
  const [value, setValue] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleLogout = async () => {
    console.error('Logout');
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose(event);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <React.Fragment>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={<IconUser stroke={1.5} size="1.3rem" />}
        label={<Typography> Account</Typography>}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        style={{ zIndex: 1000000000, marginTop: '5px' }}
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item className={classes.flex}>
                        <Typography variant="subtitle1">
                          Good Morning,
                        </Typography>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          className={classes.name}
                        >
                          John
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          Project Admin
                        </Typography>
                      </Grid>
                    </Grid>

                    <PerfectScrollbar className={classes.ScrollHeight}>
                      <Divider
                        style={{ marginBottom: '0px', marginTop: '10px' }}
                      />
                      <List component="nav" className={classes.navContainer}>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: '10px',
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0)}
                          component={React.forwardRef((props, ref) => (
                            <RouterLink
                              {...props}
                              to="/user/account-profile/profile1"
                            />
                          ))}
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                style={{ marginLeft: '-20px' }}
                                variant="body2"
                              >
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItem>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: '10px',
                          }}
                          selected={selectedIndex === 1}
                          onClick={(event) => handleListItemClick(event, 1)}
                          component={React.forwardRef((props, ref) => (
                            <RouterLink
                              {...props}
                              to="/user/social-profile/posts"
                            />
                          ))}
                        >
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid
                                container
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography
                                    style={{ marginLeft: '-20px' }}
                                    variant="body2"
                                  >
                                    Social Profile
                                  </Typography>
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItem>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: '10px',
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography
                                style={{ marginLeft: '-20px' }}
                                variant="body2"
                              >
                                Logout
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </PerfectScrollbar>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ProfileSection;

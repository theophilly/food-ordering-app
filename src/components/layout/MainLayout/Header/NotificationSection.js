import React from 'react';
import { Link } from 'react-router-dom';

// material-ui

import {
  Avatar,
  Box,
  makeStyles,
  useTheme,
  ButtonBase,
  Badge,
  CardContent,
  ClickAwayListener,
  Divider,
  Grid,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

// project imports
import MainCard from '../../../../ui-component/cards/MainCard';
import Transitions from '../../../../ui-component/extended/Transitions';
import NotificationList from './NotificationList';

// assets
import { IconBell } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
  headerAvatar: {
    cursor: 'pointer',
    borderRadius: '8px',
    width: '34px',
    height: '34px',
    fontSize: '1.2rem',
    transition: 'all .2s ease-in-out',
    background: '#E2ECF6',
    color: '#1275D1',
    '&[aria-controls="menu-list-grow"],&:hover': {
      background: '#1275D1',
      color: theme.palette.secondary.light,
    },
  },
  cardContent: {
    padding: '0px !important',
  },

  divider: {
    marginTop: 0,
    marginBottom: 0,
  },

  box: {
    overflow: 'hidden',
    borderRadius: '8px',
  },
  bodyPPacing: {
    padding: '16px 16px 0',
  },
  textBoxSpacing: {
    padding: '0px 16px',
  },
}));

// ===========================|| NOTIFICATION ||=========================== //

const NotificationSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
    <>
      <Box component="span" className={classes.box}>
        <ButtonBase>
          <Badge color="secondary" badgeContent={0} overlap="circular">
            <Avatar
              variant="rounded"
              className={classes.headerAvatar}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              <IconBell stroke={1.5} size="1.3rem" />
            </Avatar>
          </Badge>
        </ButtonBase>
      </Box>
      <Popper
        style={{ zIndex: 1000000000, marginTop: '5px' }}
        placement={'bottom-end'}
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
                offset: [matchesXs ? 5 : 0, 20],
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
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12}>
                        <div className={classes.bodyPPacing}>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Grid item>
                              <Box display="flex" spacing={2}>
                                <Typography
                                  style={{ fontSize: '.94rem' }}
                                  variant="subtitle1"
                                >
                                  All Notification
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item>
                              <Typography
                                style={{ fontSize: '.94rem' }}
                                component={Link}
                                to="#"
                                variant="subtitle2"
                                color="secondary"
                              >
                                Mark as all read
                              </Typography>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item xs={12}>
                        <div className="customscroll">
                          <Grid container direction="column" spacing={2}>
                            <Grid item xs={12} p={0}>
                              <Divider className={classes.divider} />
                            </Grid>
                            <Grid item xs={12}>
                              <NotificationList />
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default NotificationSection;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  activeClass: {
    color: '#1275D1 !important',
    backgroundColor: '#E2ECF6',
  },
}));

const ListItemStyle = styled(ListItem)(() => ({
  padding: 0,
}));

const CustomLinkStyle = styled(NavLink)(({ theme }) => ({
  width: '100%',
  padding: '8px 8px 8px 0px',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'rgb(99, 115, 129)',

  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
    color: 'inherit',
    fontSize: 18,
  },
  '& h6': {
    fontSize: 15,
    fontWeight: 400,
  },
}));

const CustomListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItemStyle button onClick={props.onClick}>
      <CustomLinkStyle
        exact
        end
        to={props.path}
        activeClassName={classes.activeClass}
      >
        <ListItemIcon>{props.icon}</ListItemIcon>

        <Typography variant="subtitle1" component="h6">
          {props.title}
        </Typography>
      </CustomLinkStyle>
    </ListItemStyle>
  );
};

export default CustomListItem;

//<ListItemText primary={props.title} />

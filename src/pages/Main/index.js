import React from 'react';

import { makeStyles } from '@material-ui/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

const Main = () => {
  const classes = useStyles();
  return <div className={classes.root} />;
};

export default Main;

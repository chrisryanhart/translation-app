import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Routes from '../routes-nav/Routes';

export default function BasicContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ marginTop:'20px'}}>
          <Routes/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

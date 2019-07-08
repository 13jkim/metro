import React from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import './footer.css';

const Footer = () => (
    <footer className='Contact-footer'>
    <Container textAlign='justified' inverted='true' fluid>
      <Grid columns={1} relaxed padded textAlign='justified'>
        <Grid.Row><Grid.Column textAlign='center' color='black' /></Grid.Row>
        <Grid.Row><Grid.Column textAlign='center' color='black' /></Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center' color='black'>
            <a href='https://www.facebook.com/metroeastfalls' target='_blank'><Icon size='big' name='facebook' color='violet' link /></a>
            <a href='https://www.instagram.com/metroeastfalls/' target='_blank'><Icon size='big' name='instagram' color='pink' link /></a>
            <a href='https://twitter.com/metropres' target='_blank'><Icon size='big' name='twitter' color='teal' link /></a>
            <a href='https://podcasts.apple.com/us/podcast/metro-presbyterian-church/id1114790890' target='_blank'><Icon size='big' name='apple' color='brown' link /></a>
            <a href='https://www.linkedin.com/in/joshua-k-chung/' target='_blank'><Icon size='big' name='spotify' color='blue' link /></a>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center' color='black'>
            © 2019 Metro Church. All rights reserved.
          </Grid.Column>
        </Grid.Row>
        <Grid.Row><Grid.Column textAlign='center' color='black' /></Grid.Row>
        <Grid.Row><Grid.Column textAlign='center' color='black' /></Grid.Row>
      </Grid>
    </Container>
  </footer>
)

export default Footer
import React, { Component } from 'react';
import { Grid, Segment, Button, Dropdown, Container } from 'semantic-ui-react';
import metroLogo from './metro-logo-L.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }

    handleMetroLogoClick() {

    }

    render() {
        return (
            <div>
                <Segment>
                    <Grid centered>
                        <Grid.Row columns={7}>
                            <Grid.Column>
                                <img src={metroLogo} alt='' />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button basic>THE GOSPEL</Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button basic>ABOUT US</Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button basic>COMMUNITY</Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button basic>CONNECT</Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button basic>SERMONS</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


            </div>
        )
    }
}
import React, { Component } from 'react';
import { Container, Card, Grid, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';
import sermons from './sermons.json';
import moment from 'moment';

export default class Sermons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sermons: sermons.data,
        }
    }

    componentDidMount() {
        console.log(this.state.sermons);
    }

    cardMeta(speaker, series, type) {
        return (
            console.log(speaker),
            <p className='sermon-listing-details'>
                <span className='sermon-speaker sermon-listing-detail'>
                    Speaker: {speaker}
                </span>
                <span className="sermon-series sermon-listing-detail">Series: {series}</span>
                <span className="sermon-categories sermon-listing-detail">Type: {type}</span>
            </p>
        )
    }

    render() {
        return (
            <div>
                <div style={{ paddingTop: '5%' }}>
                    <Grid centered>
                        <Grid.Column width={10}>
                            <Card.Group>
                                {this.state.sermons.map(sermon => (
                                    <Container key={sermon.id} style={{paddingBottom: '2%'}} >
                                        <Segment>
                                            <Header as='h5'>{moment(sermon.published_at).format('MMMM DD, YYYY')}</Header>
                                            <Header as='h1'>{sermon.title}</Header>
                                            <Header.Subheader>{this.cardMeta(sermon.preacher, sermon.series, sermon.type)}</Header.Subheader>
                                            <Header as='h4'>{sermon.passage}</Header>
                                        </Segment>
                                    </Container>
                                ))}
                            </Card.Group>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
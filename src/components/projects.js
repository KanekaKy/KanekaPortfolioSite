import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className= "projects-grid">
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465923.jpg) center /cover' }}>
                        React project
                    </CardTitle>
                    <CardText>There are many example projects created by the React community. We’re keeping this page focused on the ones that use React without third-party state management libraries.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                &emsp; &emsp; &emsp;
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465923.jpg) center /cover' }}>
                        React project
                    </CardTitle>
                    <CardText>There are many example projects created by the React community. We’re keeping this page focused on the ones that use React without third-party state management libraries.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465923.jpg) center /cover' }}>
                        React project
                    </CardTitle>
                    <CardText>There are many example projects created by the React community. We’re keeping this page focused on the ones that use React without third-party state management libraries.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465923.jpg) center /cover' }}>
                        React project
                    </CardTitle>
                    <CardText>There are many example projects created by the React community. We’re keeping this page focused on the ones that use React without third-party state management libraries.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://wallpapercave.com/wp/wp2465923.jpg) center /cover' }}>
                        React project
                    </CardTitle>
                    <CardText>There are many example projects created by the React community. We’re keeping this page focused on the ones that use React without third-party state management libraries.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Boostrap</Tab>
                    <Tab>JS/jQuery</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}
export default Projects;
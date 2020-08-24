import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="../images/avatar.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>

                            <hr />

                            <p>HTML/CSS | Boostrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/kaneka-ky/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/KanekaKy" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        left side
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        right side
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
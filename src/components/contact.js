import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> KANEKA KY </h2>
                        <img
                            src="https://media-public.canva.com/MADnJnfLdWo/2/screen.svg"
                            alt="avatar"
                            style={{ height: '200px', paddingTop: '1em' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Shut Up & Code</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-List">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    315-751-1427
                                    </ListItemContent>

                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}> 
                                <i className="fa fa-envelope-square" aria-hidden="true"/>
                                Kaneka.Ky@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}> 
                                <i className="fa fa-skype" aria-hidden="true"/>
                                KanekaKy
                                </ListItemContent>
                            </ListItem>
            
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
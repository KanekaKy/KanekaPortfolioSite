import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';

class HeaderPage extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<span
                        style={{ fontSize: '38px', color: 'white', fontFamily: 'Pacifico,cursive' }}>
                        <i className="fa fa-home" aria-hidden="true" />
                        <strong> Home</strong></span>} >
                        <Navigation>
                            <Link to="/resume" style={{ fontSize: '30px', color: 'black', fontFamily: 'Pacifico,cursive' }} activeStyle={{ color: 'blue' }}>Resume</Link>
                            <Link to="/aboutme" style={{ fontSize: '30px', color: 'black', fontFamily: 'Pacifico,cursive' }} activeStyle={{ color: 'blue' }}>About Me</Link>
                            <Link to="/projects" style={{ fontSize: '30px', color: 'black', fontFamily: 'Pacifico,cursive' }} activeStyle={{ color: 'blue' }}>Projects</Link>
                            <Link to="/contact" style={{ fontSize: '30px', color: 'black', fontFamily: 'Pacifico,cursive' }} activeStyle={{ color: 'blue' }}>Contact </Link>
                        </Navigation>
                    </Header>
                    <Drawer
                        className="drawer-color"
                        title={<span style={{ fontSize: '35px', color: 'black', fontFamily: 'Orbitron, sans-serif', fontWeight: "900", borderRadius: '15px, 89px, 18px' }}> <i className="fa fa-home" aria-hidden="true" /><strong> HOME</strong></span>}
                        style={{
                            fontSize: '28px',
                            background: '-webkit-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%)',
                            background: '-o-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%)',
                            background: '-moz-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%)',
                            background: 'linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%)',
                            fontFamily: 'Anton, sans-serif'
                        }}>
                        &nbsp;
                        &nbsp;
                        <Navigation>
                            <Link to="/resume" style={{ fontSize: '28px', color: 'black', fontFamily: 'Orbitron, sans-serif' }} activeStyle={{ color: 'blue' }}>Resume</Link>
                            <hr />
                            <Link to="/aboutme" style={{ fontSize: '28px', color: 'black', fontFamily: 'Orbitron, sans-serif' }} activeStyle={{ color: 'blue' }}>About Me</Link>
                            <hr />
                            <Link to="/projects" style={{ fontSize: '28px', color: 'black', fontFamily: 'Orbitron, sans-serif' }} activeStyle={{ color: 'blue' }}>Projects</Link>
                            <hr />
                            <Link to="/contact" style={{ fontSize: '28px', color: 'black', fontFamily: 'Orbitron, sans-serif' }} activeStyle={{ color: 'blue' }}>Contact </Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default HeaderPage;

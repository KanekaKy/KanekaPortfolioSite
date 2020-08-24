import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<span
          style={{ fontSize: '40px', color: 'white', fontFamily: 'Pacifico,cursive' }}>
          <i className="fa fa-home" aria-hidden="true"/>
          <strong> Home</strong></span>} >
          <Navigation>
            <Link to="/resume" style={{ fontSize: '28px', color: 'black', fontFamily: 'Pacifico,cursive'}} activeStyle={{ color: 'blue' }}>Resume</Link>
            <Link to="/aboutme" style={{ fontSize: '28px', color: 'black', fontFamily: 'Pacifico,cursive'}} activeStyle={{ color: 'blue' }}>About Me</Link>
            <Link to="/projects" style={{ fontSize: '28px', color: 'black', fontFamily: 'Pacifico,cursive' }} activeStyle={{ color: 'blue' }}>Projects</Link>
            <Link to="/contact" style={{ fontSize: '28px', color: 'black', fontFamily: 'Pacifico,cursive'}} activeStyle={{ color: 'blue' }}>Contact </Link>
          </Navigation>
        </Header>
        <Drawer title={<span style={{ fontSize: '40px', color: 'red', fontFamily: 'Pacifico,cursive', borderBottom:'10px double black'}}> <i className="fa fa-home" aria-hidden="true" /><strong> Home</strong></span>} style={{ fontSize: '28px', background: 'yellow', fontFamily: 'Anton, sans-serif' }}>
          <Navigation>
            <Link to="/resume" style={{ fontSize: '28px', color: 'black', fontFamily: 'Anton, sans-serif' }} activeStyle={{ color: 'blue' }}>Resume</Link>
            <hr />
            <Link to="/aboutme" style={{ fontSize: '28px', color: 'black', fontFamily: 'Anton, sans-serif' }} activeStyle={{ color: 'blue' }}>About Me</Link>
            <hr />
            <Link to="/projects" style={{ fontSize: '28px', color: 'black', fontFamily: 'Anton, sans-serif' }} activeStyle={{ color: 'blue' }}>Projects</Link>
            <hr />
            <Link to="/contact" style={{ fontSize: '28px', color: 'black', fontFamily: 'Anton, sans-serif' }} activeStyle={{ color: 'blue' }}>Contact </Link>
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

export default App;

import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Fade } from 'react-awesome-reveal';

class Header extends Component { 
    render() {
        if(!this.props.data) return null;
        const project = this.props.data.project;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;

        return ( 
            <header id="home">
                <ParticlesBg type="cobweb" color='#1fadff' num={250} bg={true} />
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portofolio">Works</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <Fade cascade direction='up' damping={0.5}>
                            <h1 className="responsive-headline">{name}</h1>
                            <h3>{description}</h3>
                        </Fade>
                        <hr />
                        <Fade direction='down' delay={800}>
                            <ul className="social">
                                <li><a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a></li>
                                <li><a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a></li>
                            </ul>
                        </Fade>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
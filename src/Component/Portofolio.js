import React, { Component } from 'react';
import Zmage from 'react-zmage';
import Fade from 'react-awesome-reveal';

// let id = 0;
class Portofolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoveredProject: null
        };
    }

    render() {
        const self = this;
        if (!this.props.data) return null;

        const projects = this.props.data.projects?.map(function (project, id) {
            let projectImage = "images/portofolio/" + project.image;

            return (
                <div key={id} 
                    className="columns portofolio-item"
                    onMouseEnter={() => self.setState({hoveredProject: id})}
                    onMouseLeave={() => self.setState({hoveredProject: null})}
                >
                    <div className="item-wrap">
                        <a 
                            href={project.url}
                            title={project.name} 
                        >
                            <Zmage alt={project.name} src={projectImage} />
                            <div style={{textAlign: "center"}}>
                                <div className="portofolio-item-meta">
                                    <h5>
                                        {project.name}
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    {self.state.hoveredProject === id && 
                        <div className="description">
                            <p>{project.description}</p>
                        </div>
                    }
                </div>
            )
        });

        return (
            <section id='portofolio'>
                <Fade direction='down' duration={1000} distance='40px'>
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>Check Out Some of My Works.</h1>
                            <div id="portofolio-wrapper" className="column bgrid-quarters s-bgrid-thirds cf">
                                {projects}
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default Portofolio;
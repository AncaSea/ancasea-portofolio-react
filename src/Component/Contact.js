import React, { Component } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

class Contact extends Component {
    render() {
        if (!this.props.data) return null;
        var name = this.props.data.name;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        var message = this.props.data.contactMessage;

        return (
            <section id="contact">
                <Fade direction='down' duration={1000}>
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">{message}</p>
                        </div>
                    </div>
                </Fade>
                <div className="row">
                    <Slide cascade direction='left' duration={1000} delay={200}>
                        <div className="eight columns">
                            <form action="" method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                                    </div>
                                    <div>
                                        <button className="submit">Submit</button>
                                        <span id="image-loader">
                                            <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>
                            <div id="message-warning"> Error boy</div>
                            <div id="message-success">
                                <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                            </div>
                        </div>
                    </Slide>
                    <Slide direction='right' duration={1000} delay={200}>
                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Address and Phone</h4>
                                <p className="address">
                                    {name}<br />
                                    {street} <br />
                                    {city}, {state} {zip}<br />
                                    <span>{phone}</span>
                                </p>
                            </div>

                            <div className="widget widget_tweets">
                                <h4 className="widget-title">Latest Tweets</h4>
                                <ul id="twitter">
                                    <li>
                                        <span>
                                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                            <a href="./">http://t.co/CGIrdxIlI3</a>
                                        </span>
                                        <b><a href="./">2 Days Ago</a></b>
                                    </li>
                                    <li>
                                        <span>
                                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                            <a href="./">http://t.co/CGIrdxIlI3</a>
                                        </span>
                                        <b><a href="./">3 Days Ago</a></b>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </Slide>
                </div>
            </section>
        );
    }
}

export default Contact;
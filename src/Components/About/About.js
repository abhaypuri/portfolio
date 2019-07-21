import React, { Component } from "react";
import { Link } from "react-scroll";
import Resume from "./CV_AbhayPuri_Intern.pdf";
import ContactIcons from "../Icons/Icons.js";
import ProfilePic from "./me.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row about">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 about-me-img">
            <img className="img-responsive" src={ProfilePic} alt="" />
          </div>

          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 about-me-text">
            <h2>
              "A year spent in artificial Intelligence is enough to make one
              believe in God."~Alan Perlis.
            </h2>
            <div>
              <p>
                Hi! I'm Abhay Puri, an undergraduate student pursuing Bachelors
                in Computer science & set to graduate at 2020. I actively work
                on research in the fields of Computer Vision, Machine Learning
                and Artificial Intelligence. If not hacking on a project, you
                would find me playing Cricket or Badminton or trying to learn a
                new sport on the field. Apart from being a hopeless gamer, I
                also enjoy listening music.
              </p>
              <p>
                I am always on the lookout for opportunities to learn more and
                work on exciting projects in the fields of my interest. Scroll
                down to take a look at some of my projects, talks and blogs.
              </p>
            </div>

            <div align="center">
              <div className="resume-pad">
                <a
                  className="btn btn-danger"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
              <hr style={{ borderColor: "black", borderWidth: "3px" }} />

              <ContactIcons iconClass={"icons"} />

              <div className="icons">
                <Link
                  to="portfolio"
                  smooth={true}
                  offset={-50}
                  className="navlink"
                >
                  <button
                    style={{ background: "transparent", border: "none" }}
                    className="fas fa-chevron-down"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

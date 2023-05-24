/* eslint-disable jsx-a11y/anchor-has-content */
import "./App.css";
import myImage from "./DSC_1079.jpg";
import Skills from "./skills";

function App() {
  return (
    <div class="container">
      <div class="card">
        <div class="row" style={{ display: "flex" }}>
          <div class="col s7 offset-1 ">
            <div style={{ display: "flex" }}>
              <div style={{ borderRadius: "50%" }}>
                <img
                  src={myImage}
                  style={{ borderRadius: "50%", width: "9vw" }}
                  alt="my-profile"
                />
              </div>
              <div class="col s8 offset-3">
                <h4>
                  <b>Vikram Singh</b>
                </h4>
                <p>MERN Full Stack Developer</p>
              </div>
            </div>
            <div>
              <h5>
                <b>Profile:</b>
              </h5>
              <p>
                Skillful Software Developer adept in logic building and
                expertise in problem solving in both FrontEnd and BackEnd.
                Speciality in JavaScript language and cutting Edge user
                Interface developing skills with Enough experience of working
                with USER-Interface, FrontEnd, BackEnd and Databases.
              </p>
            </div>
            <div>
              <h5>
                <b>Educational Qualifications:-</b>
              </h5>
              <div>
                <ul>
                  <li>
                    <h6>
                      <b>Bachelor of Arts(Psychology and Mathematics)</b>
                    </h6>
                    <p style={{ color: "green" }}>July 2018 to August 2020</p>
                  </li>
                  <li>
                    <h6>
                      <b>Master of Arts( Counselling Psychology)</b>
                    </h6>
                    <p style={{ color: "green" }}>July 2021 to August 2023</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>Courses:-</b>
              </h5>
              <ul>
                <li>
                  <h6>
                    <b>
                      Diploma in Computer Software, Hartron Workstation, Hisar
                    </b>
                  </h6>
                  <p style={{ color: "green" }}>March 2021 to March 2022</p>
                </li>
                <li>
                  <h6>
                    <b>MERN Full Stack Development, 10x Academy, Hyderabad</b>
                  </h6>
                  <p style={{ color: "green" }}>August 2022 to May 2022</p>
                  <p>
                    Good Hands on experience of Application Creation,
                    Application Design and Deployment of Web Application
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h5>
                <b>Projects:-</b>
              </h5>
              <ol>
                <li>
                  <h6>
                    <b>
                      <a href="https://rishi-fz2e.onrender.com">
                        Rishi-fz2e.onrender.com
                      </a>
                    </b>
                  </h6>
                  <p>
                    {" "}
                    This is a clone project of very famous social media platform
                    Instagram. This project is totally built using the most
                    trending FrontEnd and BackEnd frameworks like React,
                    Express.js, and Node.js
                  </p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://snapshot-uxjo.onrender.com">
                        Snapshot-uxjs.onrender.com
                      </a>
                    </b>
                  </h6>
                  <p> This is a react based Photo search Application</p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://vikramscart.onrender.com">
                        Vikramscart.onrender.com
                      </a>
                    </b>
                  </h6>
                  <p>
                    {" "}
                    This is a model for Ecommerce Website built using the
                    Trending web frameworks as React.js, ApolloServer,
                    ApolloClient, GraphQL, Strapi CMS and Stripe payment
                    management.
                  </p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://tictac-xnih.onrender.com">
                        Tictac-xnih.onrender.com
                      </a>
                    </b>
                  </h6>
                  <p>
                    {" "}
                    This is a Game Web Application based on HTML, CSS, and
                    Vanila JavaScript with EcmaScript
                  </p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://one0x-survey.onrender.com">
                        10x-survey.onrender.com
                      </a>
                    </b>
                  </h6>
                  <p>
                    {" "}
                    This is a Web Application to make surveys regarding variour
                    topics. This is completely based on React, Node.js and
                    Express.js
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div class="col s4 " style={{ backgroundColor: "skyblue" }}>
            <div>
              <h5 style={{ marginLeft: "33%" }}>
                <b> Details</b>{" "}
              </h5>
            </div>
            <div>
              <h6>
                <b>Address:-</b>
              </h6>
              <p
                style={{
                  width: "100%",
                  overflowWrap: "break-word",
                }}
              >
                <b>
                  Village- Bagla <br></br>Tehsil- Mandi Adampur <br></br>
                  District - Hisar<br></br>
                  State - Haryana<br></br> INDIA <br></br> Pin - 125052
                  <br></br> Email - vikramsaharan72056@gmail.com<br></br>
                  Mobile No.- 7988321044
                </b>
              </p>
            </div>
            <div>
              <h6>
                <b>Links:-</b>
              </h6>
              <ol>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vikram-singh-598106135"
                    alt="my-profile"
                  >
                    LinkedIn Proflie
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vikramsaharan72056"
                    alt="my-github"
                  >
                    Github
                  </a>
                </li>
              </ol>
            </div>
            <div>
              <h6>
                <b>My Skills:-</b>
              </h6>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/* eslint-disable jsx-a11y/anchor-has-content */
import "./App.css";
import myImage from "./DSC_1079.jpg";
import Skills from "./skills";

function App() {
  return (
    <div>
      <div>
        <div className="row" style={{ display: "flex" }}>
          <div className="col s7">
            <div style={{ display: "flex" }}>
              <div style={{ borderRadius: "50%" }}>
                <img
                  src={myImage}
                  style={{ borderRadius: "50%", width: "15vw" }}
                  alt="Vikram Singh"
                />
              </div>
              <div className="col s8 truncate">
                <h5 style={{ marginTop: "15%" }}>
                  <b>Vikram Singh</b>
                </h5>
                <p>Full Stack Developer | Shopify, MERN-MEAN, PHP</p>
              </div>
            </div>

            <div>
              <h5>
                <b>Profile:</b>
              </h5>
              <p>
                Detail-oriented Full Stack Developer with expertise in Shopify app development and MERN-MEAN stack
                technologies. Skilled in building custom solutions for eCommerce platforms, optimizing web performance,
                and integrating third-party APIs.
              </p>
            </div>

            <div>
              <h5>
                <b>Work Experience:</b>
              </h5>
              <div>
                <ul>
                  <li>
                    <h6>
                      <b>Junior Software Developer | ASV INFOMEDIA</b>
                    </h6>
                    <p style={{ color: "green" }}>Nov 2023 to Nov 2024 (Current)</p>
                    <ul>
                      <li>
                        Developed custom Shopify apps, including Lim's Kitchen and Kaghati, enhancing user experience and
                        automating inventory management.
                      </li>
                      <li>
                        Integrated third-party APIs for seamless communication between Shopify apps and external services
                        like WhatsApp and email.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h6>
                      <b>Freelance Web Developer | Brand Boom Digital Solutions</b>
                    </h6>
                    <p style={{ color: "green" }}>Dec 2023 to Present</p>
                    <ul>
                      <li>
                        Delivered a Doctors Appointment Booking System with an intuitive admin dashboard for schedule
                        management.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h6>
                      <b>Internship | Deep Thought Growth Management System</b>
                    </h6>
                    <p style={{ color: "green" }}>May 2023 to Nov 2023</p>
                    <ul>
                      <li>Mentored 150+ students in web development and problem-solving techniques.</li>
                      <li>Led multiple development projects, ensuring timely completion.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h5>
                <b>Education:</b>
              </h5>
              <ul>
                <li>
                  <h6>
                    <b>Master of Arts (Psychology)</b>
                  </h6>
                  <p style={{ color: "green" }}>Indira Gandhi National Open University, 81%</p>
                  <p>June 2021 - August 2023</p>
                </li>
                <li>
                  <h6>
                    <b>MERN Full Stack Development</b>
                  </h6>
                  <p style={{ color: "green" }}>10X Academy</p>
                  <p>April 2022 - February 2023</p>
                </li>
              </ul>
            </div>

            <div>
              <h5>
                <b>Projects:</b>
              </h5>
              <ol>
                <li>
                  <h6>
                    <b>
                      <a href="https://thepetproject.com/">The Pet Project</a>
                    </b>
                  </h6>
                  <p>Custom Shopify app for inventory management and eCommerce integration.</p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://ramrajcotton.in/">RamRaj Cotton</a>
                    </b>
                  </h6>
                  <p>Shopify custom solutions for enhanced user experience and seamless third-party integrations.</p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://apps.shopify.com/kaghati-companion">Kaghati Companion</a>
                    </b>
                  </h6>
                  <p>Public Shopify app for real-time inventory updates and order management.</p>
                </li>
                <li>
                  <h6>
                    <b>
                      <a href="https://dental-frontend.onrender.com/">Dental Appointment System</a>
                    </b>
                  </h6>
                  <p>React-based Doctors Appointment Booking System with a user-friendly admin dashboard.</p>
                </li>
              </ol>
            </div>
          </div>

          <div className="col s4" style={{ backgroundColor: "skyblue" }}>
            <div>
              <h5 style={{ margin: "10%" }}>
                <b>Details</b>
              </h5>
            </div>
            <div>
              <h6>
                <b>Address:</b>
              </h6>
              <p style={{ width: "100%", overflowWrap: "break-word" }} className="truncate">
                <b>
                  Village- Bagla <br />
                  Tehsil- Mandi Adampur <br />
                  District - Hisar <br />
                  State - Haryana <br />
                  INDIA <br />
                  Pin - 125052 <br />
                  Email - vikramsaharan72056@gmail.com <br />
                  Mobile No.- 7988321044
                </b>
              </p>
            </div>
            <div>
              <h6>
                <b>Links:</b>
              </h6>
              <ol>
                <li>
                  <a href="https://www.linkedin.com/in/vikram-singh-598106135">LinkedIn Profile</a>
                </li>
                <li>
                  <a href="https://github.com/vikramsaharan72056">GitHub</a>
                </li>
              </ol>
            </div>
            <div>
              <h6>
                <b>My Skills:</b>
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

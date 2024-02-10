import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="feedback-sec">
          <section id="contact">
            <div class="sectionheader">
              {" "}
              <h1>CONTACT</h1>
            </div>
            <article>
              <p>
                Thanks for Visiting.
                <br />
                For any queries and suggestions ,click on the icon below.
              </p>

              <label for="checkcontact" class="contactbutton">
                <div class="mail"></div>
              </label>
              <input id="checkcontact" type="checkbox" />

              <form action="" method="post" class="contactform">
                <p class="input_wrapper">
                  <input
                    type="text"
                    name="contact_nom"
                    value=""
                    id="contact_nom"
                  />
                  <label for="contact_nom">NAME</label>
                </p>
                <p class="input_wrapper">
                  <input
                    type="text"
                    name="contact_email"
                    value=""
                    id="contact_email"
                  />
                  <label for="contact_email">EMAIL</label>
                </p>
                <p class="input_wrapper">
                  <input
                    type="text"
                    name="contact_sujet"
                    value=""
                    id="contact_sujet"
                  />
                  <label for="contact_sujet">SUBJECT</label>
                </p>
                <p class="textarea_wrapper">
                  <textarea
                    name="contact_message"
                    id="contact_message"
                  ></textarea>
                </p>
                <p class="submit_wrapper">
                  <input type="submit" value="SUBMIT" />
                </p>
              </form>
            </article>
          </section>
        </div>
        <div className="contact-part">
          <footer>
            <div class="footer" className="ftlast">
              <div className="logohyt">
                <img src="hxy.png" alt="" />
              </div>
              <div class="row">
                <a href="#" id="ftlasst">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </div>

              <div class="row">
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>

              <div class="row">Copyright © 2021 - All rights reserved ||</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;

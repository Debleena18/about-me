import React from "react";
import "../styles/socialMedia.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { socialMediaLinks } from "../utils/config";

const SocialMedia = () => {
  return (
    <div data-aos="slide-right" className="social-btns">
      <a
        className="btn facebook"
        href={socialMediaLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon class="fa fa-facebook" />
      </a>
      <a
        className="btn instagram"
        href={socialMediaLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon class="fa fa-instagram" />
      </a>
      <a
        className="btn github"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon class="fa fa-github" />
      </a>
      <a
        className="btn linkedin"
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon class="fa fa-linkedin" />
      </a>
      <a
        className="btn whatsapp"
        href={socialMediaLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon class="fa fa-whatsapp" />
      </a>
    </div>
  );
};

export default SocialMedia;

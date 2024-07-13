import { Link } from "react-router-dom";
import { socialLinks } from "../data";

const Socials = () => {
  return (
    <div className="socials">
       {
        socialLinks.map((social, index) => (
            <Link to={social.link} key={index} target="_blank" rel="noreferrer noopener"><img src={social.iconUrl} /></Link>
        ))
       }
    </div>
  );
};

export default Socials
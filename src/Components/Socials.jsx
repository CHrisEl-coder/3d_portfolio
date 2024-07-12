import { Link } from "react-router-dom";
import { socialLinks } from "../data";

const Socials = () => {
  return (
    <div className="socials">
       {
        socialLinks.map(social => (
            <Link to={social.link} target="_blank" rel="noreferrer noopener"><img src={social.iconUrl} /></Link>
        ))
       }
    </div>
  );
};

export default Socials
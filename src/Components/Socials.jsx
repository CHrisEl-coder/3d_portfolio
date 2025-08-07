import { Link } from "react-router-dom";
import { socialLinks } from "../data";

const Socials = () => {
  return (
    <div className="socials mb-4">
      {socialLinks.map((link, idx) => (
        <Link
          to={`${link.link}`}
          key={idx}
          className=" w-8 h-8 rounded-full shadow-md shadow-yellow-500/70 hover:shadow-lg hover:shadow-gray-400 hover:scale-105 transition-all duration-200 ease-out "
        >
          <img
            src={link.iconUrl}
            alt={link.name}
            className="object-cover w-full h-full"
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;

import React from "react";
import { Bookmark } from "lucide-react";
const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src="https://imgs.search.brave.com/_4tMpJOzHM2MTjop7WcsUFjxK_tU9rjX8fhZv_Mtd8Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/MTM2LzMyMi9zbWFs/bC9hbWF6b24tbG9n/by1hbWF6b24taWNv/bi1mcmVlLWZyZWUt/dmVjdG9yLmpwZw"
            alt=""
          />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon<span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>$120/hr</h3>
          <p>Mumbai, India</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;

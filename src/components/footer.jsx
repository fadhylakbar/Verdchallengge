import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
            }}
          >
            <em>lorem</em>Ipsum
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div className="mt-10"></div>
          <div className="sub">
            <div>
              <b>Company</b>
              <p>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Foodies</b>
              <p>Code of conduct</p>
              <p>Community</p>
            </div>
            <div>
              <b>News</b>
              <p>Fashion</p>
              <p>LifeStyle</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div className="flex gap-4">
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <AiFillApple />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

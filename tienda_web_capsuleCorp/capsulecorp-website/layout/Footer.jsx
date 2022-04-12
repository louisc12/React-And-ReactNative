import { Link } from "@reach/router";

const Footer = () => {
  return (
    <>
      <LinkContent />
      <footer>
        <small>©768 Capsule Corp, Inc.</small>
        <img
          src="https://c.tenor.com/wOYCmkP-p6sAAAAC/dragon-ball-capsule-corp.gif"
          height="150"
          width="150"
          alt="capsule gif"
        />
      </footer>
    </>
  );
};

const LinkContent = () => {
  return (
    <div className="sitemap">
      <img
        src="https://derpicdn.net/img/2018/1/10/1629282/large.png"
        width="80"
        height="90"
        alt="capsule corp alternative logo"
      />
      <span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Terms of use</Link>
          </li>
          <li>
            <Link to="/">Shipping and return</Link>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Footer;

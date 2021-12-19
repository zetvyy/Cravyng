import logo2 from "./assets/logo2.png";
import Styles from "./assets/footer.module.scss";
import ps from "./assets/google_play.png";
import as from "./assets/appstore.png";

const Footer = () => {
  const Login = window.location.pathname === "/" || 
                window.location.pathname === "/sign-up" ||  
                window.location.pathname === "/sign-in";
  return (
    <div className={Login ? Styles.container : Styles.container_login}>
      <img className={Styles.logo2} src={logo2} alt="logo2" />
      <div className={Login ? Styles.get_started : Styles.get_started_login}>
        <p>GET STARTED</p>
        <a href="/sign-up/merchant">AS MERCHANT</a>
        <br />
        <br />
        <a href="/sign-up/customer">AS CUSTOMER</a>
      </div>
      <div className={Styles.download}>
        <p>DOWNLOAD CRAVYNC</p>
        <img src={ps} alt="playstore" />
        <img src={as} alt="appstore" />
      </div>
    </div>
  );
};

export default Footer;

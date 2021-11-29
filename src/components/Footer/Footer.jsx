import logo2 from "./assets/logo2.png";
import Styles from "./assets/footer.module.scss";
import ps from "./assets/google_play.png";
import as from "./assets/appstore.png";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <img className={Styles.logo2} src={logo2} alt="logo2" />
      <div className={Styles.get_started}>
        <p>GET STARTED</p>
        <a href="#">AS MERCHANT</a>
        <br />
        <br />
        <a href="#">AS CUSTOMER</a>
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

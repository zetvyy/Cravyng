import Styles from "./header.module.scss";
import {MdStars} from 'react-icons/md';

const Header = () => {
    return (
        <div className={Styles.header}>
            <div>
                <h1>Heavenly Taste</h1>
                <p>
                    <MdStars className={Styles.star_icon}/>
                    <span>4.7</span>
                </p>
            </div>
      </div>
    )
}
export default Header
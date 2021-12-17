import Styles from "./header.module.scss";
import { MdStars } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetailUser } from "../../redux/action/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.authReducer.data);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getDetailUser());
    }, 300);
  }, [dispatch]);

  return (
    <div className={Styles.header}>
      <div className={Styles.info_profile}>
        <h1>{users.name}</h1>
        <div className={Styles.rating}>
          <MdStars className={Styles.star_icon} />
          <p>4.7</p>
        </div>
      </div>
    </div>
  );
};
export default Header;

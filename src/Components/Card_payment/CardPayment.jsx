import Styles from "./assets/cardpayment.module.scss";
import { 
    TextField, 
    FormControl, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel, 
    Radio,
    Button,
    Modal,
    Box,
    Typography,
    
} from "@mui/material";
import { useState,  } from "react"
import loadingLogo from "./assets/Group 4615.svg"
import { useHistory } from "react-router";
import { payment, updateCheckout } from "../../redux/action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../../redux/action/addCartAction";
import { updateDiscount } from "../../redux/action/discountAction";


const CardPayment = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    fontFamily: 'Poppins',
    textAlign: 'center',
  };

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { addCart } = useSelector((state) => state.addCartMenu)
  const { dataUpdateOrder } = useSelector((state) => state.getOrderMenu)
  // const { dataUpdateDiscount } = useSelector((state) => state.discountReducer)
  

  const totalPrice = 
    addCart?.reduce((total, item)=> total+(item?.menu?.price*item?.quantity),0)
  

  const totalPayment = 
    addCart?.reduce((total, item)=> total+item?.subTotalPrice,0)
  
  console.log(addCart)

  const discount = addCart?.reduce((total, item)=> {
    if(item?.menu?.specialPrice){
      return total+((item?.menu?.price-item?.menu?.specialPrice)*item?.quantity)
    }
    return total
  },0)
  // console.log(discount)

  const specialOffers = totalPrice-discount-dataUpdateOrder.priceTotalAftDiscount

  const handleSubmit = (e) => {
    dispatch(payment(dataUpdateOrder.id));
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      
      history.push("/cart");
    }, 3000);
  };
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(addToCart());
    dispatch(updateCheckout())
    dispatch(updateDiscount())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div className={Styles.card}>
      <p>
        Price <span>Rp. {totalPrice}</span>{" "}
      </p>
      <p>
        Discount <span>Rp.  -{discount}</span>{" "}
      </p>
      {dataUpdateOrder.priceTotalAftDiscount === null ? (
        <p>
          Special Offers <span>Rp. 0</span>{" "}
        </p>
      ) : (
        <p>
          Special Offers <span>Rp. -{specialOffers}</span>{" "}
        </p>
      )}
      
      <hr style={{ width: "325px", color: "#d3d9ff", marginBottom: "30px" }} />
      <p className={Styles.total}>
        Total Payment {dataUpdateOrder.priceTotalAftDiscount === null ? (
        <span>Rp. {totalPayment}</span> ) : (<span>Rp. {dataUpdateOrder.priceTotalAftDiscount}</span>)}
      </p>
      <div>
        <h3>Send Receipt</h3>
        <p>Please input an email address to send the receipt</p>
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        type="email"
        sx={{width:"325px"}}
        />
      </div>
      <div>
        <h3>Payment Method</h3>
        <FormControl component="fieldset">
            <FormLabel component="legend">Select payment method</FormLabel>
            <RadioGroup
                aria-label="gender"
                defaultValue="Bank Transfer"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Bank Transfer" control={<Radio />} label="Bank Transfer" />
                <FormControlLabel value="Credit/Debit card" control={<Radio />} label="Credit/Debit card" />
            </RadioGroup>
        </FormControl>
      </div>
        <Button onClick={handleSubmit} className={Styles.btn_pay}>Pay</Button>

        {/* loading loading */}
        <Modal
        open={loading}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography            
          >
            <img src={loadingLogo} alt="" />
            <Typography>
              Hold on. Don’t close your browser
            </Typography>
          </Typography>
        
      </Box>
      </Modal>
    </div>

    
  );
};

export default CardPayment;

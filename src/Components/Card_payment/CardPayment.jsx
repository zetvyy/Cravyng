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
import { useState } from "react"
import loadingLogo from "./assets/Group 4615.svg"
import { useHistory } from "react-router";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      history.push("/cart");
    }, 3000);
  };
  // const handleClose = () => setOpen(false);

  return (
    <div className={Styles.card}>
      <p>
        Price <span>Rp. 440.000</span>{" "}
      </p>
      <p>
        Discount <span>Rp. -88.000</span>{" "}
      </p>
      <p>
        Special Offers <span>Rp. -20.000</span>{" "}
      </p>
      <hr style={{ width: "325px", color: "#d3d9ff", marginBottom: "30px" }} />
      <p className={Styles.total}>
        Total Payment <span>Rp. 332.000</span>{" "}
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

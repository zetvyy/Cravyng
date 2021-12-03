import Styles from "./assets/cardpayment.module.scss";
import { 
    TextField, 
    FormControl, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel, 
    Radio,
    Button
} from "@mui/material";

const CardPayment = () => {
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
        <Button className={Styles.btn_pay}>Pay</Button>
    </div>
  );
};

export default CardPayment;

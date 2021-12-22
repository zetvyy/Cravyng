import { useState }from "react";
import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField, FormControl} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useDispatch } from "react-redux";
import { getSalesSummary } from "../../redux/action/profileAction";

const DatePeriod = (props) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");

  const dateChange = (newValue) => {
    setDate(newValue);
    dispatch(getSalesSummary(newValue))
  };

  const label= props.label

  return (
      <FormControl sx={{ width: "225px", marginTop:'24px' , marginRight:"20px"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: "225px"}}>
          <MobileDatePicker 
            label={label} 
            inputFormat="yyyy/MM/dd" 
            value={date} 
            onChange={dateChange} 
            renderInput={params => <TextField {...params} />} 
          />
        </LocalizationProvider>
      </FormControl>
  );
};

export default DatePeriod;

import { MobileDatePicker, LocalizationProvider } from "@mui/lab";
import { TextField, FormControl} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const DatePeriod = (props) => {

  const dateChange = (newValue) => {
    props.onChange(newValue)
  };
  
  const label= props.label

  return (
      <FormControl sx={{ width: "225px", marginTop:'24px' , marginRight:"20px"}}>
        <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: "225px"}}>
          <MobileDatePicker 
            label={label} 
            inputFormat="yyyy/MM/dd" 
            value={props.value} 
            onChange={dateChange} 
            renderInput={params => <TextField {...params} />} 
          />
        </LocalizationProvider>
      </FormControl>
  );
};

export default DatePeriod;

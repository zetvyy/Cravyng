import { useState } from "react";
import { useDispatch } from "react-redux"
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"
import moment from 'moment'
import { getSalesSummary } from "../../redux/action/profileAction";

const DateFilter = ({submitPeriod, visible, setVisible}) => {
    const dispatch = useDispatch()

    const [date, setDate] = useState("");

    const handleChange = (event) => {
        if (event.target.value === "Period") {
          submitPeriod()
        } else {
          // setVisible(!visible)
          setDate(event.target.value);
          dispatch(getSalesSummary(event.target.value))
        }
    };

    const handlePeriod = () => {
        setVisible(!visible)
    }

    return (
        <FormControl fullWidth sx={{ width: "225px", marginTop:'24px', marginRight:"20px"}}>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label="Date"
                onChange={handleChange}
            >
                <MenuItem value={moment().format('YYYY/MM/DD 00:00:00')}>
                  Today
                </MenuItem>
                <MenuItem value={moment().subtract(1, "weeks").format('YYYY/MM/DD HH:mm:ss')}>
                  This Week
                </MenuItem>
                <MenuItem value={moment().subtract(1, "months").format('YYYY/MM/DD HH:mm:ss')}>
                  Last Month
                </MenuItem>
                <MenuItem value={moment().subtract(3, "months").format('YYYY/MM/DD HH:mm:ss')}>
                  Last 3 Month
                </MenuItem>
                <MenuItem value="Period" onClick={handlePeriod} >
                  Period
                </MenuItem>
                
            </Select>
        </FormControl>
    )
}

export default DateFilter
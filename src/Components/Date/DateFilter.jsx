import { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material"


const DateFilter = () => {

    const [date, setDate] = useState("");

    const handleChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <FormControl fullWidth sx={{ width: "225px", marginTop:'24px'}}>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label="Date"
                onChange={handleChange}
            >
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>This Week</MenuItem>
                <MenuItem value={30}>Last Month</MenuItem>
                <MenuItem value={40}>Last 3 Month</MenuItem>
                <MenuItem value={50}>Period</MenuItem>
                
            </Select>
        </FormControl>
    )
}

export default DateFilter
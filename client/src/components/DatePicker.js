import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-yellow-800">
      <DatePicker
        placeholderText={"test"}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
      />
    </div>
  );
}

export default Calendar;

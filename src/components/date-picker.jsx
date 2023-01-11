import React, { useState } from 'react';

const DatePicker = (props) => {
  const {name, onChange} = props;
  const [date, setDate] = useState(new Date());

  const handleChange = e => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    if (selectedDate.getMonth() === currentDate.getMonth() && selectedDate.getDate() <= currentDate.getDate()) {
      setDate(selectedDate);
      console.log(selectedDate)
      const dateChange = { currentTarget: {name: name, value: selectedDate}}
      onChange(dateChange)
    }
  };

  

  return (
    <div>
    <label htmlFor={name}>{name}</label>
    <input type="date" name={name}  value={date.toISOString().substr(0, 10)} min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-01`} max={new Date().toISOString().substr(0, 10)} onChange={handleChange} />
    </div>
  );
};

export default DatePicker;

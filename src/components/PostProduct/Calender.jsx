import React, { useEffect, useState } from 'react'
import { Application, Calendar, Card } from "react-rainbow-components"
import moment from 'moment';

const Calender = ({ setInitialDate, setFinalDate }) => {
  const today = moment();
  const theme = {
    rainbow: {
      palette: {
        brand: "#F85E00",
      },
    },
  };

  const [date, setDate] = useState(new Date());



  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {

    if (!date[0]) {
      return;
    }
    else if (date[1]) {
      setInitialDate(formatDate(date[0]))
      setFinalDate(formatDate(date[1]))
    }
    else {
      setInitialDate(formatDate(date[0]))
      setFinalDate(formatDate(date[0]))
    }
  }, [date])



  return (
    <Application
      theme={theme}
      className="w-full lg:w-[35%] h-auto  flex gap-4 flex-col items-center justify-start"
    >
      <Card className="rainbow-p-around_large w-full">

        <Calendar
          id="calendar-7"
          selectionType="range"
          value={date}
          minDate={today.toDate()}
          onChange={(value) => setDate(value)}
        />
      </Card>

    </Application>
  )
}

export default Calender
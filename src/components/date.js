import React from 'react';

function TodayDate() {
  // Get today's date
  const today = new Date();

  // Extract day, month, and year
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();

  // Format the date as desired (e.g., DD/MM/YYYY)
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div>
      Today's Date: {formattedDate}
    </div>
  );
}

export default TodayDate;

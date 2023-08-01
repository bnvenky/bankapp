export default function formatDate(inputDate) {
    // Parse the input date string into a Date object
    const dateObj = new Date(inputDate);
  
    // Month names array
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // Get day, month, and time components from the date object
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
  
    // Convert hours to 12-hour format and handle AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // If hours is 0, make it 12
  
    // Add leading zero to minutes if needed
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    // Construct the formatted string
    const formattedDate = `${day} ${month}, ${hours}:${minutes} ${ampm}`;
  
    return formattedDate;
  }
  
  const inputDate = "2023-07-26T00:00:00+00:00";
  const formattedDate = formatDate(inputDate);
  console.log(formattedDate); // Output: "26 Jul, 12:00 AM"
  
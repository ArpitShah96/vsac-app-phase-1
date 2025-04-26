const generateSlots = (days = 7) => {
  const slotsPerDay = ["10:00", "11:00", "13:00", "15:00"];
  const slots = [];

  const today = new Date();

  // Time zone difference (India Standard Time - Central European Time)
  const timeZoneOffset = 3.5 * 60 * 60 * 1000; // 3.5 hours in milliseconds

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Convert date to CET (Germany Time) from the server's local time (India Time)
    const cetDate = new Date(date.getTime() - timeZoneOffset); 

    // Skip Sundays
    if (cetDate.getDay() === 0) {
      continue; // Skip Sunday
    }

    const yyyy = cetDate.getFullYear();
    const mm = String(cetDate.getMonth() + 1).padStart(2, "0");
    const dd = String(cetDate.getDate()).padStart(2, "0");

    const datePart = `${yyyy}-${mm}-${dd}`;

    slotsPerDay.forEach((time) => {
      // Generate time slots based on CET (adjusted for server time)
      const slotDate = new Date(`${datePart}T${time}`);
      // Push slot with CET time format
      slots.push(slotDate.toISOString());
    });
  }

  return slots;
};

module.exports = generateSlots;

const generateSlots = (days = 7) => {
  const slotsPerDay = ["10:00", "11:00", "13:00", "15:00"];
  const slots = [];

  const today = new Date();

  for (let i = 1; i <= days; i++) { // Start from tomorrow (i=1)
    const date = new Date(today);
    date.setDate(today.getDate() + i); // i days ahead

    // Set timezone explicitly to IST (India Standard Time)
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const istDate = new Date(date.getTime() + istOffset);

    // Skip Sundays (still based on IST date)
    if (istDate.getDay() === 0) {
      continue; // Skip Sunday
    }

    const yyyy = istDate.getFullYear();
    const mm = String(istDate.getMonth() + 1).padStart(2, "0");
    const dd = String(istDate.getDate()).padStart(2, "0");

    const datePart = `${yyyy}-${mm}-${dd}`;

    slotsPerDay.forEach((time) => {
      const slotDate = new Date(`${datePart}T${time}:00.000+05:30`); // IST fixed
      slots.push(slotDate.toISOString()); // Store slots as ISO (good for database)
    });
  }

  return slots;
};

module.exports = generateSlots;

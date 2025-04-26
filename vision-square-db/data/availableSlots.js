// 📂 /data/availableSlots.js
// ✅ This file generates available booking slots for the next 7 days starting from tomorrow, skipping Sundays.

const generateSlots = (days = 7) => {
  // Fixed times for booking each day
  const slotsPerDay = ["10:00", "11:00", "13:00", "15:00"];
  const slots = [];
  
  const today = new Date();
  
  // 📅 Start from tomorrow
  today.setDate(today.getDate() + 1);

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // 🚫 Skip Sundays (Holiday)
    if (date.getDay() === 0) {
      continue;
    }

    // Format the date parts
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    const datePart = `${yyyy}-${mm}-${dd}`;

    // 📌 Generate slots with IST (+5:30 timezone)
    slotsPerDay.forEach((time) => {
      const slotDate = new Date(`${datePart}T${time}:00+05:30`);
      slots.push(slotDate.toISOString()); // save in ISO for consistent backend/frontend
    });
  }

  return slots;
};

module.exports = generateSlots;

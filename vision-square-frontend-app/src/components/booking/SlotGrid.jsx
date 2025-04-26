import React from "react";

// SlotGrid component to display available time slots
const SlotGrid = ({ slots, selectedSlot, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {slots.map((slot, idx) => {
        // Format slot time in hh:mm AM/PM
        const time = new Date(slot).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Check if current slot is selected
        const isSelected = selectedSlot === slot;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(slot)} // Handle slot selection
            className={`px-3 py-2 rounded-lg text-sm transition ${
              isSelected
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default SlotGrid;

import React from "react";

// SlotGrid component to display available time slots
const SlotGrid = ({ slots, selectedSlot, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {slots.map((slot, idx) => {
        const time = new Date(slot).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const isSelected = selectedSlot === slot;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(slot)}
            className={`px-3 py-2 rounded-xl text-sm shadow-sm border transition font-medium
              ${
                isSelected
                  ? "bg-blue-600 text-white ring-2 ring-blue-300"
                  : "bg-gray-100 hover:bg-blue-100 text-gray-800"
              }`}
            title={`Select ${time} slot`}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default SlotGrid;

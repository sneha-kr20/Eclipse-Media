"use client";

import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO,
} from "date-fns";

interface Event {
  start: string; // ISO date string
  end: string;   // ISO date string
  title: string;
}

interface CalendarModalProps {
  events: Event[];
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ events, isOpen, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  if (!isOpen) return null; // Modal not visible

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleDayClick = (day: Date) => {
    const event = events.find(
      (e) =>
        day >= parseISO(e.start) &&
        day <= parseISO(e.end)
    );
    setSelectedEvent(event || null);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-auto">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Prev
            </button>
            <h2 className="text-xl font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center font-medium text-gray-700 mb-2">
            {weekdays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => {
              const dayEvent = events.find(
                (e) =>
                  day >= parseISO(e.start) &&
                  day <= parseISO(e.end)
              );
              const isCurrentMonth = isSameMonth(day, currentMonth);

              return (
                <button
                  key={day.toString()}
                  onClick={() => handleDayClick(day)}
                  className={`min-h-[60px] p-1 rounded-lg border text-sm
                    ${isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"}
                    ${dayEvent ? "bg-red-400 text-white" : "hover:bg-pink-100"}
                    transition-colors`}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          {/* Selected Event Info */}
          {selectedEvent && (
            <div className="mt-4 p-3 bg-pink-50 border border-pink-200 rounded text-center">
              <span className="font-semibold text-pink-600">{selectedEvent.title}</span>
              <p className="text-gray-700 text-sm">
                {format(parseISO(selectedEvent.start), "dd MMM yyyy")} →{" "}
                {format(parseISO(selectedEvent.end), "dd MMM yyyy")}
              </p>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
      </div>
    </>
  );
};

export default CalendarModal;

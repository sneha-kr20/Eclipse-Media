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
} from "date-fns";

interface Event {
  date: string;
  title: string;
  description?: string;
}

interface CalendarProps {
  events: Event[];
  onSelectDate?: (event: Event | null) => void;
}

const CalendarModal: React.FC<CalendarProps> = ({ events, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const handleDayClick = (day: Date) => {
    const event = events.find((e) => isSameDay(new Date(e.date), day)) || null;
    setSelectedEvent(event);
    onSelectDate && onSelectDate(event);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      {/* Header with Month Navigation */}
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
          const dayEvent = events.find((e) => isSameDay(new Date(e.date), day));
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

      {/* Event Modal */}
      {selectedEvent && (
        <div className="mt-4 p-4 bg-pink-50 border border-pink-200 rounded">
          <h3 className="font-semibold text-pink-600">{selectedEvent.title}</h3>
          <p className="text-gray-700">{selectedEvent.description || "No description."}</p>
          <button
            onClick={() => setSelectedEvent(null)}
            className="mt-2 px-3 py-1 bg-pink-200 rounded hover:bg-pink-300"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarModal;

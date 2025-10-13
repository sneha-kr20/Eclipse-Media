"use client";

import { useState } from "react";
import CalendarModal from "@/components/CalendarModal";

export default function BookingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const events = [
    { title: "Music Concert", start: "2025-10-15", end: "2025-10-15" },
    { title: "Wedding Event", start: "2025-10-18", end: "2025-10-20" },
    { title: "Birthday Party", start: "2025-10-20", end: "2025-10-21" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        Open Calendar
      </button>

      <CalendarModal
        events={events}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

import CalendarModal from "@/components/Calendar";

export default function BookingPage() {
  const events = [
    { date: "2025-10-15", title: "Music Concert", description: "Live concert at the city hall." },
    { date: "2025-10-18", title: "Wedding Event", description: "Private wedding ceremony." },
    { date: "2025-10-20", title: "Birthday Party", description: "Children's birthday celebration." },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <CalendarModal events={events} />
    </div>
  );
}

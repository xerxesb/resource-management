import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

type Booking = {
  id: number;
  resourceName: string;
  projectName: string;
  startDate: Date;
  endDate: Date;
};

const initialBookings: Booking[] = [
  { id: 1, resourceName: 'John Doe', projectName: 'Project A', startDate: new Date(2023, 2, 1), endDate: new Date(2023, 3, 15) },
  { id: 2, resourceName: 'Jane Smith', projectName: 'Project B', startDate: new Date(2023, 2, 15), endDate: new Date(2023, 4, 30) },
  { id: 3, resourceName: 'Mike Johnson', projectName: 'Project C', startDate: new Date(2023, 3, 1), endDate: new Date(2023, 5, 15) },
  { id: 4, resourceName: 'John Doe', projectName: 'Project D', startDate: new Date(2023, 4, 1), endDate: new Date(2023, 5, 30) },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const COLORS = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];

export const Bookings: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date(2023, 2, 1));
  const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);

  const formatDate = (date: Date) => `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

  const handlePrevMonth = () => {
    setStartDate(new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setStartDate(new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1));
  };

  const getDaysInRange = () => {
    const days = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInRange();

  const getBookingPosition = (booking: Booking) => {
    const start = Math.max(booking.startDate.getTime(), startDate.getTime());
    const end = Math.min(booking.endDate.getTime(), endDate.getTime());
    const startOffset = (start - startDate.getTime()) / (endDate.getTime() - startDate.getTime());
    const duration = (end - start) / (endDate.getTime() - startDate.getTime());
    return { startOffset, duration };
  };

  const uniqueResources = Array.from(new Set(initialBookings.map(b => b.resourceName)));

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resource Bookings</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-lg font-semibold">
              {formatDate(startDate)} - {formatDate(endDate)}
            </span>
          </div>
          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <div style={{ width: `${days.length * 30}px`, minWidth: '100%' }}>
            <div className="flex border-b">
              <div className="w-48 flex-shrink-0"></div>
              {days.map((day, index) => (
                <div key={index} className="w-8 flex-shrink-0 text-center text-xs">
                  {day.getDate()}
                </div>
              ))}
            </div>
            {uniqueResources.map((resource, resourceIndex) => (
              <div key={resourceIndex} className="flex border-b">
                <div className="w-48 flex-shrink-0 p-2 font-medium">{resource}</div>
                <div className="flex-grow relative" style={{ height: '40px' }}>
                  {initialBookings
                    .filter(booking => booking.resourceName === resource)
                    .map((booking, bookingIndex) => {
                      const { startOffset, duration } = getBookingPosition(booking);
                      return (
                        <div
                          key={bookingIndex}
                          className="absolute top-1 h-8 rounded-full text-white text-xs flex items-center justify-center overflow-hidden"
                          style={{
                            left: `${startOffset * 100}%`,
                            width: `${duration * 100}%`,
                            backgroundColor: COLORS[bookingIndex % COLORS.length],
                          }}
                          title={`${booking.projectName}: ${booking.startDate.toDateString()} - ${booking.endDate.toDateString()}`}
                        >
                          {booking.projectName}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
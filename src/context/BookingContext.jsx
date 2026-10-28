import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialData, setInitialData] = useState({
    refrigeratorType: '',
    problem: '',
  });

  const openBookingModal = (data = {}) => {
    setInitialData({
      refrigeratorType: data.refrigeratorType || '',
      problem: data.problem || '',
    });
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        openBookingModal,
        closeBookingModal,
        initialData,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

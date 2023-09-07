import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CalendarInput = ({ isVisible, setIsVisible, setSelectedDate }) => {
  const handleConfirm = (date) => {
    setSelectedDate(date);
    setIsVisible(false);
  };
  return (
    <DateTimePickerModal
      maximumDate={new Date()}
      isVisible={isVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={() => setIsVisible(false)}
    />
  );
};

export default CalendarInput;

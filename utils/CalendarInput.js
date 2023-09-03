import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CalendarInput = ({ isVisible, setIsVisible, setSelectedDate }) => {
  const handleConfirm = (date) => {
    setSelectedDate(date);
    setIsVisible(false);
  };
  return (
    <View>
      <DateTimePickerModal
        maximumDate={new Date()}
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsVisible(false)}
      />
    </View>
  );
};

export default CalendarInput;

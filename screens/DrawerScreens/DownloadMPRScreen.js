import { StyleSheet } from "react-native";
import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DownloadMPRScreen = () => {
  const [selectedDate, setSelectedDate] = React.useState(undefined);

  const handleConfirm = (date) => {
    setSelectedDate(date);
  };

  const handleCancel = () => {
    setSelectedDate("");
  };

  console.log(selectedDate);

  return (
    <DateTimePickerModal
      maximumDate={new Date()}
      isVisible={true}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default DownloadMPRScreen;

const styles = StyleSheet.create({});

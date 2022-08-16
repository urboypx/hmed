import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Next from "./Next";
import RenderDays from "./RenderDays";
import SchedulesList from "./SchedulesList";

const Schedules = () => {
  const days = [...Array(7).keys()];

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        {/* Get next schedule */}
        <Next />

        {/* Show days of the week */}
        <FlatList
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={days}
          renderItem={({ item, index }) => (
            <RenderDays key={index} index={item} />
          )}
        />
      </View>

      {/* Schedule for the day of the week */}
      <SchedulesList style={{ marginTop: 15 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  upperContainer: {},
  flatlist: {
    paddingVertical: 15,
  },
});

export default Schedules;

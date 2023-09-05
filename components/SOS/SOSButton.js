import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withSequence,
  withDelay,
} from "react-native-reanimated";

const SOSButton = () => {
  const buttonScale = useSharedValue(1);

  useEffect(() => {
    const buttonAnimation = withRepeat(
      withSequence(
        withSpring(1.5, { damping: 15, stiffness: 30 }),
        withSpring(1.1, { damping: 15, stiffness: 30 })
      ),
      -1, // Infinite repetition
      true // Alternating direction (scale up and down)
    );

    buttonScale.value = buttonAnimation;
  }, []);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  return (
    <Animated.View style={[styles.button, buttonStyle]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Linking.openURL("tel: +91 91111 11111")}
      >
        <Text style={styles.text}>SOS</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#a52a2a",
    position: "absolute",
  },
  circle2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#a52a2a",
    position: "absolute",
  },
  circle3: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#a52a2a",
    position: "absolute",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#a52a2a",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Add elevation to make it appear above the circles
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default SOSButton;

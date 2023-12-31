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
  }, [buttonScale]);

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
    fontFamily: "Poppins-Medium",
  },
});

export default SOSButton;

import COLORS from "@src/configs/theme/colors";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const Ring = ({ delay }) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [1, 3]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 3000,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[styles.ring, ringStyle]} />;
};

export default function AnimatedCircle({ icon }: any) {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Ring delay={0} />
      <Ring delay={500} />
      <Ring delay={1000} />
      <Ring delay={1500} />
      <Ring delay={2000} />
      <Ring delay={2500} />
      <Ring delay={3000} />
      {icon && icon}
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.CIRCLE,
  },
});

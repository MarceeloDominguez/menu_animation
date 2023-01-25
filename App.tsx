import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "@expo/vector-icons/Ionicons";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCallback } from "react";
import Drawer from "./src/components/Drawer";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const THRESHOLD = SCREEN_WIDTH / 3;

export default function App() {
  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = Math.max(event.translationX + context.x, 0);
    },
    onEnd: () => {
      if (translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 15],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [
        { perspective: 100 },
        {
          translateX: translateX.value,
        },
        { rotateY: `-${rotate}deg` },
      ],
    };
  }, []);

  const onPress = useCallback(() => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    }
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Drawer />
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View
            style={[{ backgroundColor: "#ECE8DD", flex: 1 }, rStyle]}
          >
            <Icon
              name="menu-outline"
              size={32}
              style={styles.iconMenu}
              onPress={onPress}
            />
            <Navigation />
          </Animated.View>
        </PanGestureHandler>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7286D3",
  },
  iconMenu: {
    margin: 15,
    marginTop: 40,
    width: 32,
  },
});

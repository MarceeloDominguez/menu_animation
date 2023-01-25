import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import DrawerButton from "./DrawerButton";
import { AntDesign } from "@expo/vector-icons";

const { height: HEIGHT_SCREEN } = Dimensions.get("window");

const buttons = [
  {
    title: "Home",
    icon: "home-outline",
    route: "Home",
  },
  {
    title: "Notifications",
    icon: "notifications-outline",
    route: "Notifications",
  },
];

export default function Drawer() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapItems}>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
            }}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.subName}>@johndoe_23</Text>
          <View>
            {buttons.map((item, index) => (
              <DrawerButton item={item} key={index} />
            ))}
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.logOut} activeOpacity={0.8}>
            <AntDesign name="logout" size={24} color="#ECE8DD" />
            <Text style={styles.textLogOut}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginHorizontal: 16,
    paddingTop: 45,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontWeight: "600",
    lineHeight: 22,
  },
  subName: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "600",
    opacity: 0.5,
    marginBottom: 10,
  },
  wrapItems: {
    height: HEIGHT_SCREEN,
    justifyContent: "space-between",
  },
  logOut: {
    marginBottom: HEIGHT_SCREEN <= 600 ? 60 : 40,
    flexDirection: "row",
  },
  textLogOut: {
    paddingLeft: 10,
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: "#ECE8DD",
  },
});

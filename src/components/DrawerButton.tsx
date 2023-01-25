import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation, CommonActions } from "@react-navigation/native";

interface Items {
  title: string;
  icon: string | any;
  route: string;
}

type Props = {
  item: Items;
};

export default function DrawerButton({ item }: Props) {
  const { title, route, icon } = item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.dispatch(CommonActions.navigate(route))}
    >
      <Icon name={icon} size={20} />
      <Text style={styles.name}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECE8DD",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 8,
    borderRadius: 10,
    width: 140,
    elevation: 15,
  },
  name: {
    paddingLeft: 5,
    letterSpacing: 0.5,
  },
});

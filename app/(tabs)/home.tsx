import { View, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import React from "react";
import HeaderBar from "../components/headerBar/HeaderBar";

const statusBarHeight = Constants.statusBarHeight;

const index = () => {
  return (
    <ScrollView
      style={{ paddingTop: statusBarHeight + 8 }}
      className="bg-[#1E1F1F]"
    >
      <HeaderBar />
    </ScrollView>
  );
};

export default index;

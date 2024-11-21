import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const HeaderBar = () => {
  return (
    <View className="relative w-full">
      <Pressable className="w-12 h-12 bg-red-500 rounded-full ml-10">
        <Image
          source={require("../../../assets/images/Home/icon/avatar.png")}
          className="w-full h-full"
        />
      </Pressable>
      <Image
        className="absolute right-1/2 translate-x-1/2"
        source={require("../../../assets/images/logo.png")}
      />
    </View>
  );
};

export default HeaderBar;

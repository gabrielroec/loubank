import { View, Text, Pressable, Image } from "react-native";
import React from "react";

interface User {
  name: string;
  avatarUrl: any;
}

const HeaderBar = ({ name, avatarUrl }: User) => {
  return (
    <View className=" w-full flex flex-row items-center justify-between px-3">
      <View className="flex flex-row items-center">
        <Pressable className="w-12 h-12 rounded-full">
          <Image source={avatarUrl} className="w-full h-full" />
        </Pressable>
        <View>
          <Text className="text-slate-400 text-sm bottom-0 right-0 ml-2 ">
            Bem-vindo,
          </Text>
          <Text className="text-white text-sm bottom-0 right-0 ml-2 font-bold">
            {name}
          </Text>
        </View>
      </View>

      <Image source={require("../../../assets/images/logo.png")} />
    </View>
  );
};

export default HeaderBar;

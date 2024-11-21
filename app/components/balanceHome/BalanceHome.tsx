import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import AnimatedNumbers from "react-native-animated-numbers";

interface Balance {
  balance: number;
}

const BalanceHome = ({ balance }: Balance) => {
  return (
    <View className="flex flex-row items-center justify-between px-3">
      <View className="mt-8">
        <Text className="text-base text-white font-bold">Seu saldo</Text>
        {/* Animando o saldo com AnimatedNumbers */}
        <View className="flex items-end flex-row gap-1">
          <Text className="text-3xl text-white font-bold">R$</Text>
          <AnimatedNumbers
            animateToNumber={balance}
            animationDuration={2000}
            includeComma={true}
            fontStyle={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              lineHeight: 36,
            }}
            locale="en-US"
          />
        </View>
      </View>
      <Pressable className="flex items-center justify-center mt-8 bg-[#252626] w-12 h-12 rounded-full">
        <Ionicons name="search" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default BalanceHome;

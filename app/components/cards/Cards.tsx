import { View, Text, Pressable } from "react-native";
import React from "react";
import { CardProps } from "../userCards/UserCards";
import LinearGradient from "react-native-linear-gradient";

const getBackgroundColor = (provider: string | undefined) => {
  switch (provider) {
    case "Visa":
      return "#B2D0CE";
    case "MasterCard":
      return "#F1FE87";
    default:
      return "#B8A9C6";
  }
};

const Cards = ({ card }: { card: CardProps }) => {
  const backgroundColor = getBackgroundColor(card.provider);

  return (
    <Pressable
      className="p-6 w-[150px] rounded-3xl"
      style={{ backgroundColor }}
    >
      <Text className="text-xl font-bold mb-6">{card.provider}</Text>
      <View>
        <Text className="text-xs">Saldo</Text>
        <Text className="text-lg font-bold">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(card.balance)}
        </Text>
      </View>
      <Text className="text-xs text-gray-500 mt-6">{card.cardNumber}</Text>
    </Pressable>
  );
};

export default Cards;

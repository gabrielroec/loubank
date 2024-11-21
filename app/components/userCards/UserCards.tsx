import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Cards from "../cards/Cards";
import { fetchAccounts } from "../../../api";

export interface CardProps {
  id?: string;
  type?: string; // Tipo da conta, e.g., 'Salary', 'Savings'
  balance?: number;
  bank?: string; // Nome do banco, e.g., 'LouBank'
  provider?: string; // Bandeira do cartão, e.g., 'Visa', 'MasterCard', 'Elo'
  cardNumber?: string; // Número completo do cartão
  cardType?: string; // Tipo do cartão, e.g., 'Credit', 'Debit'
  accountNumber?: string; // Número completo da conta
  agency?: string; // Número da agência
  currency?: string; // Moeda, e.g., 'BRL'
  cardHolderName?: string; // Nome do titular do cartão
  expirationDate?: string; // Data de validade no formato MM/AA
  cvv?: string; // Código de segurança
}

const UserCards = () => {
  const [card, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchAccounts();
        setCards(data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadUserData();
  }, []);

  return (
    <View className="mt-8 px-3">
      <FlatList
        horizontal={true}
        data={card}
        renderItem={({ item }: { item: CardProps }) => <Cards card={item} />}
        contentContainerStyle={{ gap: 14 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default UserCards;

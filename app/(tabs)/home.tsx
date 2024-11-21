import { View, Text, ScrollView, Image } from "react-native";
import Constants from "expo-constants";
import React, { useState, useEffect } from "react";
import HeaderBar from "../components/headerBar/HeaderBar";
import { fetchUserData, fetchAccounts, fetchTotalBalance } from "../../api";
import BalanceHome from "../components/balanceHome/BalanceHome";

const statusBarHeight = Constants.statusBarHeight;

const avatarImages = {
  "avatar.png": require("../../assets/images/Home/icon/avatar.png"),
};

const Index = () => {
  const [userData, setUserData] = useState<any>(null);
  const [totalBalance, setTotalBalance] = useState<any>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);

        const balance = await fetchTotalBalance();
        setTotalBalance(balance);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadUserData();
  }, []);

  if (!userData) {
    return <Text>Carregando...</Text>;
  }

  const avatarUrl = avatarImages[userData.avatarUrl];

  return (
    <>
      <ScrollView
        style={{ paddingTop: statusBarHeight + 8 }}
        className=" relative z-50"
      >
        <HeaderBar name={userData.name} avatarUrl={avatarUrl} />
        <BalanceHome balance={totalBalance} />
      </ScrollView>
      <Image
        source={require("../../assets/images/Home/Background.png")}
        className="absolute right-0 top-0 w-full h-full object-cover bg-[#1E1F1F]"
      />
    </>
  );
};

export default Index;

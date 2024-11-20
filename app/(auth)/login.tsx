import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/button/CustomButton";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router"; // Use useRouter em vez de router diretamente

interface KeypadButtonProps {
  number: string;
  onPress: () => void;
}

function KeypadButton({ number, onPress }: KeypadButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-20 h-20 rounded-full bg-zinc-800 items-center justify-center m-2"
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text className="text-white text-3xl font-light">{number}</Text>
    </Pressable>
  );
}

export default function PasscodeEntry() {
  const [passcode, setPasscode] = useState<string>("");
  const maxLength = 5;

  // Adicione o Animated.Value para controlar a opacidade
  const [overlayOpacity] = useState(new Animated.Value(0));

  const router = useRouter(); // Corrige a importação do router

  useEffect(() => {
    if (passcode.length === maxLength) {
      // Anima a opacidade de 0 para 1
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300, // Duração da animação em milissegundos
        useNativeDriver: true,
      }).start();
    } else {
      // Anima a opacidade de 1 para 0
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [passcode.length]);

  const handleNumberPress = (num: string) => {
    if (passcode.length < maxLength) {
      setPasscode((prev) => prev + num);
    }
  };

  const handleClear = () => {
    setPasscode((prev) => prev.slice(0, -1));
  };

  const handleClearAll = () => {
    setPasscode("");
  };

  return (
    <View className="flex-1 bg-zinc-900 items-center justify-center py-12">
      <Text className="text-white text-xl mb-4">Digite sua senha </Text>

      <View className="flex-row mb-12 gap-10">
        {[...Array(maxLength)].map((_, i) => (
          <View key={i} className={`w-3 h-3 rounded-full ${i < passcode.length ? "bg-white" : "bg-zinc-700"}`} />
        ))}
      </View>

      <View className="w-full max-w-xs">
        <View className="flex-row justify-center">
          <KeypadButton number="1" onPress={() => handleNumberPress("1")} />
          <KeypadButton number="2" onPress={() => handleNumberPress("2")} />
          <KeypadButton number="3" onPress={() => handleNumberPress("3")} />
        </View>

        <View className="flex-row justify-center">
          <KeypadButton number="4" onPress={() => handleNumberPress("4")} />
          <KeypadButton number="5" onPress={() => handleNumberPress("5")} />
          <KeypadButton number="6" onPress={() => handleNumberPress("6")} />
        </View>

        <View className="flex-row justify-center">
          <KeypadButton number="7" onPress={() => handleNumberPress("7")} />
          <KeypadButton number="8" onPress={() => handleNumberPress("8")} />
          <KeypadButton number="9" onPress={() => handleNumberPress("9")} />
        </View>

        <View className="flex-row justify-center">
          <View className="w-20 m-2" />
          <KeypadButton number="0" onPress={() => handleNumberPress("0")} />
          <Pressable
            onPress={handleClear}
            className="w-20 h-20 rounded-full m-2 items-center justify-center"
            style={({ pressed }) => ({
              opacity: pressed ? 0.7 : 1,
            })}
          >
            <Ionicons name="backspace" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      <Pressable className="mt-8">
        <Text className="text-yellow-400 text-sm">Não consegue fazer o login</Text>
      </Pressable>

      {/* Animated Overlay */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: overlayOpacity, // Aplica a opacidade animada
        }}
      >
        <BlurView intensity={100} tint="dark" style={{ flex: 1, padding: 16 }}>
          <View className="w-full h-full flex items-center justify-center">
            <CustomButton
              variant="primary"
              title="Login"
              className="py-4 w-3/4 shadow-2xl"
              onPress={() => router.push("/login")}
              fullWidth={true}
            />
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
}

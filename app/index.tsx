import { Text, View, SafeAreaView, Image } from "react-native";
import CustomButton from "./components/button/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full bg-[#1E2121] flex items-center justify-center relative px-10">
      <Image source={require("../assets/images/logo.png")} className="mb-10" />
      <CustomButton
        variant="primary"
        title="Login"
        className="py-4 w-[300px]"
        onPress={() => router.push("/login")}
        fullWidth={false}
      />
      <CustomButton
        variant="secondary"
        title="Seja um cliente do banco"
        className="py-4  mt-5 w-[300px]"
        onPress={() => router.push("/signup")}
        fullWidth={false}
      />
    </SafeAreaView>
  );
}

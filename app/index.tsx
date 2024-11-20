import { Text, View, SafeAreaView, Image } from "react-native";
import CustomButton from "./components/button/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="w-full h-full bg-[#1E2121] flex items-center justify-center relative px-5">
      <Image source={require("../assets/images/logo.png")} className="mb-4" />
      <CustomButton variant="primary" title="Login" className="py-4 " onPress={() => router.push("/login")} fullWidth={true} />
      <CustomButton
        variant="secondary"
        title="Seja um cliente do banco"
        className="py-4  mt-5"
        onPress={() => router.push("/signup")}
        fullWidth={true}
      />
    </SafeAreaView>
  );
}

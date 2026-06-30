
import LogInScreen from "@/screens/LogInScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
    <LogInScreen/>
    </SafeAreaProvider>
  );
}

import { SafeAreaProvider } from "react-native-safe-area-context";
import LogInScreen from "./(screens)/loginScreen";

export default function Index() {
  return (
    <SafeAreaProvider>
      <LogInScreen />
    </SafeAreaProvider>
  );
}

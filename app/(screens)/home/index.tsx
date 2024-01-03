import { View, Text } from "react-native";

import { useAppSelector } from "@/state/redux/hooks";
const HomeScreen = () => {
  const { userFirstName } = useAppSelector((state) => state.user);
  return (
    <View>
      <Text>{userFirstName}</Text>
    </View>
  );
};

export default HomeScreen;

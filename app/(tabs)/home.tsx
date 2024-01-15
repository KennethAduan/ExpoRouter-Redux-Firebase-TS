import { View, Text } from "react-native";
import React from "react";
import { useAppSelector } from "@/state/redux/hooks";
const Page = () => {
  const { userId } = useAppSelector((state) => state.user);
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  );
};

export default Page;

import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className=" bg-dark-200 rounded-full flex-row items-center px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff "
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db "
        className="flex-1 ml-2 text-white"
        selectionColor="#ab8bff "
      />
    </View>
  );
};

export default SearchBar;

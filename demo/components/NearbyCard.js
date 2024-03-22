import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Card(props) {
  const item = props.item;
  const navigation = useNavigation();

  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Product");
      }}
    >
      <View
        key={item.id}
        style={{ borderRadius: 40 }}
        className="bg-white p-1 mx-1 my-1.5"
      >
        <View className="w-64 h-48 relative">
          <Image
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              borderRadius: 40,
            }}
            source={item.image}
            resizeMode="cover"
          />

          <View className="flex flex-row items-center justify-between px-5 absolute bottom-4 w-full">
            <TouchableOpacity onPress={handleLike}>
              <View
                className={
                  like
                    ? `bg-red-400 w-8 h-8 rounded-full p-1.5`
                    : `w-8 h-8 rounded-full p-1.5`
                }
              >
                <Image
                  style={{ width: undefined, height: undefined, flex: 1 }}
                  source={item.fav}
                />
              </View>
            </TouchableOpacity>
            <Text className="text-base font-bold text-white">
              {"$ " + item.price}
            </Text>
            <Text className="text-base font-bold text-white">
              {"$ " + item.price}
            </Text>
          </View>
        </View>

        {/* */}

        <View className="px-5 mt-4">
          <Text className="text-xl font-bold">{item.title}</Text>
          <Text className="text-md font-bold text-gray-400">
            {item.location}
          </Text>
        </View>

        {/* */}

        <View className="mt-3 mb-4 flex flex-row px-5 justify-between">
          <Text className="text-base font-bold text-gray-400">
            {item.bed + " Bed"}
          </Text>
          <Text className="text-base font-bold text-gray-400">
            {item.bath + " Bath"}
          </Text>
          <Text className="text-base font-bold text-gray-400">
            {item.area + " sq.m"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

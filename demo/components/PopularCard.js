import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Card(props) {
  const properties = props.properties;

  return (
    <View>
      {properties.map((item) => (
        <View
          key={item.id}
          style={{ borderRadius: 40 }}
          className="bg-white p-1 mx-1 my-1.5"
        >
          <View className="w-full h-56 relative">
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
              <View className="w-6 h-6 rounded-full">
                <Image
                  style={{ width: undefined, height: undefined, flex: 1 }}
                  source={item.fav}
                />
              </View>
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
      ))}
    </View>
  );
}

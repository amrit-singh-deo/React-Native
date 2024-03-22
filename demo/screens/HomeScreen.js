import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import menu from "../assets/images/menu.png";
import avatar from "../assets/images/avatar.png";
import search from "../assets/images/search.png";
import categories from "../data/categories";
import PopularCard from "../components/PopularCard";
import NearbyCard from "../components/NearbyCard";
import properties from "../data/properties";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <SafeAreaView className="bg-gray-200">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="bg-white rounded-b-[50px] py-2.5 px-1.5">
            <View className="p-4 flex flex-row justify-between h-20 items-center">
              <TouchableOpacity>
                <View className="w-14 h-14 rounded-full bg-gray-200 p-2.5">
                  <Image
                    style={{ width: undefined, height: undefined, flex: 1 }}
                    source={menu}
                  />
                </View>
              </TouchableOpacity>
              <View className="flex-1 mx-5">
                <Text className="text-2xl font-extrabold">Hello Amrit</Text>
                <Text className="text-base font-semibold">
                  Bhubaneswar, Odisha
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <View className="w-14 h-14 rounded-full">
                  <Image
                    style={{ width: undefined, height: undefined, flex: 1 }}
                    source={avatar}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View className="p-4 relative">
              <TextInput
                style={{ fontSize: 17, fontWeight: "bold" }}
                placeholder="Search properties here..."
                className="bg-gray-200 px-16 py-4 rounded-full"
              />
              <View className="w-7 h-7 rounded-full absolute top-8 left-9">
                <Image
                  style={{ width: undefined, height: undefined, flex: 1 }}
                  source={search}
                />
              </View>
            </View>
          </View>

          {/*  */}

          <View className="h-20 rounded-full overflow-hidden my-1.5">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity className="flex flex-row items-center">
                  <View className="shadow-lg bg-white flex flex-row justify-center items-center px-6 py-4 rounded-full mx-1.5 ml-2.5">
                    <Text className="text-lg font-semibold">{item.title}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          {/*  */}

          <View className="flex flex-row items-center justify-between mt-4 mb-2 px-6">
            <Text className="text-2xl font-extrabold">Nearby</Text>
            <TouchableOpacity>
              <Text className="text-base font-bold text-gray-400">See All</Text>
            </TouchableOpacity>
          </View>

          {/* */}

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={properties}
            renderItem={({ item }) => <NearbyCard item={item} />}
          />

          {/*  */}

          <View className="flex flex-row items-center justify-between mt-4 mb-2 px-6">
            <Text className="text-2xl font-extrabold">Popular</Text>
            <TouchableOpacity>
              <Text className="text-base font-bold text-gray-400">See All</Text>
            </TouchableOpacity>
          </View>

          {/* */}

          <PopularCard properties={properties} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

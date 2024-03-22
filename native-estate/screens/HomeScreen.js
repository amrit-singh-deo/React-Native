import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { avatar, bell, house, star } from "../constants/images";
import { Category } from "../components";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-yellow-100 px-5 py-3 h-[360px] rounded-b-[40px]">
      <SafeAreaView>
        <View className=" flex items-center">
          <View className="w-full flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <View className="h-16 w-16 rounded-full">
                <Image
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                  }}
                  source={avatar}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="bg-white h-16 w-16 p-5 rounded-full">
                <Image
                  style={{
                    width: undefined,
                    height: undefined,
                    flex: 1,
                  }}
                  source={bell}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex items-center mt-2 mb-1">
            <Text className="text-lg font-semibold">
              Find The Best Property!
            </Text>
            <Text className="tracking-widest text-4xl font-extrabold">
              Hello, Amrit.
            </Text>
          </View>

          <Category />

          <View
            style={{ borderRadius: 40 }}
            className="bg-white w-full p-2 flex flex-row items-center"
          >
            <View className="h-40 w-40">
              <Image
                style={{
                  width: undefined,
                  height: undefined,
                  flex: 1,
                  borderRadius: 30,
                }}
                source={house}
                resizeMode="cover"
              />
            </View>
            <View className="bg-green-400 flex mx-3">
              <Text className="text-xl font-bold">AAPEC Houses</Text>
              <View className=" bg-red-400 flex flex-row justify-between">
                <View className="h-3 w-3 rounded-full">
                  <Image
                    style={{
                      width: undefined,
                      height: undefined,
                      flex: 1,
                    }}
                    source={star}
                    resizeMode="contain"
                  />
                </View>
                <Text>4.8</Text>
                <Text>65 Reviews</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

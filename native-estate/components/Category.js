import { Text, TouchableOpacity, ScrollView } from "react-native";
import categories from "../constants/categories";
import { useState } from "react";

const Category = () => {
  const [isSelected, setIsSelected] = useState(categories);

  const handleClick = (item) => {
    let updatedState = isSelected.map((isSelectedItem) =>
      isSelectedItem.id === item.id
        ? { ...isSelectedItem, clicked: true }
        : { ...isSelectedItem, clicked: false }
    );
    setIsSelected(updatedState);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-4 w-screen"
    >
      {isSelected.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleClick(item)}>
          <Text
            className={
              item.clicked
                ? `bg-yellow-300 text-xl text-gray-600 font-semibold rounded-full px-6 py-4 mx-2`
                : `text-xl text-gray-600 font-semibold rounded-full px-6 py-4 mx-2`
            }
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;

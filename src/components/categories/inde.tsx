import { FlatList } from "react-native";

import { categories } from "@/utils/categories";

import { Category } from "@/components/category";
import { styles } from "./styles";

export function Categories() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category name={item.name} icon={item.icon} isSelected={false} />
      )}
      horizontal
    />
  );
}

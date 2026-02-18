import { Categories } from "@/components/categories/inde";
import { Link } from "@/components/link";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
export default function Index() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rocket"
            url="jjfnfjnfwrnfrwfnr"
            onDetails={() => console.log("ainnnn")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

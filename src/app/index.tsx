import { Categories } from "@/components/categories/inde";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
export default function Index() {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.navigate("/add")}
        >
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
      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}></Text>
            <Text style={styles.modalUrl}></Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secundary" />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

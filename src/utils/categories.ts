import { MaterialIcons } from "@expo/vector-icons";
type Category = {
  id: string;
  name: string;
  /* link: string; */
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Academia", icon: "account-box" },
  { id: "2", name: "Trabalho", icon: "account-box" },
  { id: "3", name: "Filmes", icon: "account-box" },
  { id: "4", name: "Estudos", icon: "account-box" },
  { id: "5", name: "Sonhos", icon: "account-box" },
  { id: "6", name: "Investimentos", icon: "account-box" },
  { id: "7", name: "Viagem", icon: "account-box" },
];

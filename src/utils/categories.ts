import { MaterialIcons } from "@expo/vector-icons";
type Category = {
  id: string;
  name: string;
  /* link: string; */
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Esportes", icon: "sports-volleyball" },
  { id: "2", name: "Trabalho", icon: "work" },
  { id: "3", name: "Filmes", icon: "movie" },
  { id: "4", name: "Estudos", icon: "book" },
  { id: "5", name: "Sonhos", icon: "cloud" },
  { id: "6", name: "Investimentos", icon: "money" },
  { id: "7", name: "Viagem", icon: "mode-of-travel" },
];

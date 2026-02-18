import { MaterialIcons } from "@expo/vector-icons";
type Category = {
  id: string;
  name: string;
  /* link: string; */
  icon: keyof typeof MaterialIcons.glyphMap;
};

export const categories: Category[] = [
  { id: "1", name: "Curso", icon: "account-box" },
  { id: "2", name: "Curso", icon: "account-box" },
  { id: "3", name: "Curso", icon: "account-box" },
  { id: "4", name: "Curso", icon: "account-box" },
  { id: "5", name: "Curso", icon: "account-box" },
  { id: "6", name: "Curso", icon: "account-box" },
  { id: "7", name: "Curso", icon: "account-box" },
];

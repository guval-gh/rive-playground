import { Pressable, Text } from "react-native";

type ButtonProps = {
  onPress: () => void;
  text: string;
  isSelected?: boolean;
};

export const CustomButton = ({ onPress, text, isSelected }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "lightgray",
        ...(isSelected && {
          backgroundColor: "lightgray",
          color: "#000000",
        }),
      }}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};

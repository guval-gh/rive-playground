import { Pressable } from "react-native";

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  isSelected?: boolean;
};

export const CustomButton = ({
  onPress,
  children,
  isSelected,
}: ButtonProps) => {
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
      {children}
    </Pressable>
  );
};

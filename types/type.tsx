import { TextInputProps } from "react-native";

type titleTextType = {
  title?: string;
  text?: string;
};

type inputFieldType = {
  className?: {};
  styleSheet?: {};
  classNameText?: {};
  styleSheetText?: {};
} & TextInputProps;

type passwordInputType = {
  className?: {};
  styleSheet?: {};
  classNameText?: {};
  styleSheetText?: {};
} & TextInputProps;

type buttonType = {
  className?: {};
  styleSheet?: {};
  classNameText?: {};
  styleSheetText?: {};
  text?: string;
  handlePress?: () => void;
};

export { titleTextType, inputFieldType, buttonType, passwordInputType };

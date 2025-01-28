interface ButtonType {
    title: string;
    onPress: () => void;
    customStyle?: string;
    customTextStyle?: string;
    isLoading ?: boolean;
}
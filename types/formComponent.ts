export interface FormComponentType {
    title: string,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password',
    isPassword ?: boolean
}
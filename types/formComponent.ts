export interface FormComponentType {
    title: string,
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password',
    isPassword ?: boolean,
    customStyle ?: string
}

export interface FormErrorType {
    isEmailOk: boolean | null,
    isPasswordOk: boolean | null,
    errorMessage: {
        email: string | null,
        password: string | null
    }
}
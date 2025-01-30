export interface UserType {
    id: string;
    email: string;
    username?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserSimpleType {
    id: string;
    email: string;
    username: string;
}
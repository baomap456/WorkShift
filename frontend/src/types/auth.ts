export type UserRole = "ADMIN" | "STAFF";

export interface User {
    id: number;
    email: string;
    name: string;
    role : UserRole;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    user: User;
}
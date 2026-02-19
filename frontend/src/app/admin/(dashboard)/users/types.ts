
export enum Role {
    ADMIN = 'ADMIN',
    STAFF = 'STAFF',
}

export enum EmployeeType {
    FULL_TIME = 'FULL_TIME',
    PART_TIME = 'PART_TIME',
}

export interface User {
    id: number;
    fullName: string;
    email: string;
    role: Role;
    type?: EmployeeType;
    baseSalary: number;
    isActive: boolean;
}

export type CreateUserInput = Omit<User, 'id'>;

export type UpdateUserInput = Omit<User, 'id'>;

export type UserWithId = User;
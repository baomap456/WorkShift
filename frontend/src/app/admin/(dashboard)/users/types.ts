
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
    employeeType?: EmployeeType;
    baseSalary: number;
    isActive: boolean;
}

export type UserWithId = User;
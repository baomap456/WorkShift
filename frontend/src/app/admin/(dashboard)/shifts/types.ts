export interface Shift {
    id: number;
    name: string;
    startTime: string; // ISO 8601 format
    endTime: string;   // ISO 8601 format
    unitPrice?: number;
}

export type CreateShiftInput = Omit<Shift, 'id'>;

export type UpdateShiftInput = CreateShiftInput;
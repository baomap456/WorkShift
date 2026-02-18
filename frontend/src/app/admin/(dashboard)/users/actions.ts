'use server';

import api from '@/src/lib/axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const API = `${process.env.NEXT_PUBLIC_API_URL}/users`;

export async function createUser(formData: FormData) {
    const rawData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        role: formData.get('role'),
        type: formData.get('type'),
        baseSalary: Number(formData.get('baseSalary')),
        isActive: formData.get('isActive') === 'on',
    };

        const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rawData),
    });

    if (!res.ok) {
        const errorText = await res.text();
        console.error('Create User Error:', errorText);
        throw new Error('Failed to create user');
    }

    revalidatePath('/users');
    redirect('/users');
}

// 2. UPDATE
export async function updateUser(id: number, formData: FormData) {
    const rawData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        role: formData.get('role'),
        type: formData.get('type'),
        baseSalary: Number(formData.get('baseSalary')),
        isActive: formData.get('isActive') === 'on',
    };

    const res = await fetch(`${API}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rawData),
    });

    if (!res.ok) throw new Error('Failed to update user');

    revalidatePath('/users');
    redirect('/users');
}

// 3. DELETE
export async function deleteUser(id: number) {
    const res = await fetch(`${API}/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete user');

    revalidatePath('/users');
}

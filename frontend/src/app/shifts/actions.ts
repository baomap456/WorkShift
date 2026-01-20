'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const API = process.env.API_URL!;

export async function createShift(data: FormData) {
    const rawData = {
        name: data.get('name') as string,
        startTime: data.get('startDate') as string,
        endTime: data.get('endDate') as string,
    }

    const res = await fetch(`${API}/shift`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rawData),
    });

    if (!res.ok) {
        throw new Error('Failed to create shift');
    }

    revalidatePath('/shifts');
    redirect('/shifts');
}

export async function updateShift(id: number, formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        startTime: formData.get('startTime'),
        endTime: formData.get('endTime'),
    };

    const res = await fetch(`${API}/shift/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rawData),
    });

    if (!res.ok) throw new Error('Failed to update');

    revalidatePath('/shifts');
    redirect('/shifts');
}

export async function deleteShift(id: number) {
    const res = await fetch(`${API}/shift/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete');

    revalidatePath('/shifts');
}
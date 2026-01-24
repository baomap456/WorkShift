'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { convertTimeToIso } from './utils';

const API = process.env.API_URL!;

export async function createShift(data: FormData) {
    const rawData = {
        name: data.get('name') as string,
        startTime: convertTimeToIso(data.get('startTime') as string),
        endTime: convertTimeToIso(data.get('endTime') as string),
        unitPrice: data.get('unitPrice') ? Number(data.get('unitPrice')) : undefined,
    }

    console.log('🚀 [Debug] Sending Data to NestJS (Create):', rawData);

    const res = await fetch(`${API}/shift`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rawData),
    });

    if (!res.ok) {
        const errorResponse = await res.text();
        console.error('❌ [Debug] Backend Error:', res.status, errorResponse);
        throw new Error('Failed to create shift');
    }

    revalidatePath('/shifts');
    redirect('/shifts');
}

export async function updateShift(id: number, formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        startTime: convertTimeToIso(formData.get('startTime') as string),
        endTime: convertTimeToIso(formData.get('endTime') as string),
        unitPrice: formData.get('unitPrice') ? Number(formData.get('unitPrice')) : undefined,
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
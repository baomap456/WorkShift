export function formatTimeForInput(isoString?: string) {
    if (!isoString) return '';

    const date = new Date(isoString);
    if (isNaN(date.getTime())) return isoString;

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export function convertTimeToIso(timeStr: string): string {
    if (typeof timeStr !== 'string' || !timeStr) {

        return new Date().toISOString();
    }

    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    return date.toISOString();
}
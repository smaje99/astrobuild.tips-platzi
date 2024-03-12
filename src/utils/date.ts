const optionsLocaleDate: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
};

export function formatDate(date: string): string {
  const event = new Date(date);
  return event.toLocaleDateString('es-CO', optionsLocaleDate);
}

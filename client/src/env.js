export const httpApi = "http://localhost:3000";

export const formattedTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};
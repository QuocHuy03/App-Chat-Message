export const httpApi = "https://app-chat-message.onrender.com";

export const formattedTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

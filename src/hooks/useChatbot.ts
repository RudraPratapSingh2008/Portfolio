import { useState } from 'react';

export type MessageRole = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'bot',
      content: 'The portfolio assistant is not connected yet, but I would love to hear from you.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isWakingUp, setIsWakingUp] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = '/api/bot/webhook';

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setIsWakingUp(false);
    setError(null);

    const wakeupTimer = setTimeout(() => {
      setIsWakingUp(true);
    }, 4000);

    try {
      const payload = {
        query: {
          sender: "WebUser",
          message: content.trim(),
          isGroup: false
        }
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      clearTimeout(wakeupTimer);
      setIsWakingUp(false);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      let botResponse = "Sorry, I couldn't understand that.";
      if (data.replies && data.replies.length > 0 && data.replies[0].message) {
        botResponse = data.replies[0].message;
      } else if (data.message) {
        botResponse = data.message;
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botResponse,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      clearTimeout(wakeupTimer);
      setIsWakingUp(false);
      console.error('Chatbot API error:', err);
      setError('Connection failed. Please try again.');
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: 'Maaf kijiye, abhi server se connect nahi ho paa raha hoon. (Connection failed)',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    isWakingUp,
    error,
    sendMessage,
  };
}
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    ChatWidgetConfig?: {
      workspaceToken: string;
    };
  }
}

export function ChatWidget() {
  useEffect(() => {
    // Set the configuration before loading the script
    window.ChatWidgetConfig = {
      workspaceToken: 'pk_0109b383989ea590ca155ca6c5c0e6c387b44ac87b754128db869770b62e6bd7'
    };

    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://pandy-chatbot-widget.boostpanda.ai/chat-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      delete window.ChatWidgetConfig;
    };
  }, []);

  return null;
}

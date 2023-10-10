'use client';

import { Companion } from '@prisma/client';
import { ChatMessage, ChatMessageProps } from '@/components/chat-message';
import { useEffect, useState } from 'react';

interface ChatMessagesProps {
  companion: Companion;
  isLoading: boolean;
  messages: ChatMessageProps[];
}

export function ChatMessages({ companion, isLoading, messages = [] }: ChatMessagesProps) {
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0);

  useEffect(() => {
    const timeout = setTimeout(() => setFakeLoading(false), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className='flex-1 overflow-y-auto pr-4'>
      <ChatMessage isLoading={fakeLoading} src={companion.src} role='system' content='Lorem ipsum dolor sit ammet' />
      {messages.map((message) => (
        <ChatMessage key={message.content} role={message.role} content={message.content} src={message.src} />
      ))}
      {isLoading && <ChatMessage role='system' src={companion.src} isLoading />}
    </div>
  );
}

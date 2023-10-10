'use client';

import { ChatRequestOptions } from 'ai';
import React, { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';

interface ChatFormProps {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean;
}

export default function ChatForm({ input, handleInputChange, onSubmit, isLoading }: ChatFormProps) {
  return (
    <form onSubmit={onSubmit} className='border-t border-primary/10 py-4 flex items-center'>
      <div className='relative w-full border border-black/10 dark:border-gray-900/50 dark:text-white rounded-xl shadow-xs dark:shadow-xs dark:bg-primary/10 bg-white'>
        <Input
          disabled={isLoading}
          value={input}
          onChange={handleInputChange}
          placeholder='Send message'
          className='h-14 m-0 w-full resize-none border-0 bg-transparent py-5 pr-16'
        />
        <Button
          disabled={isLoading}
          className='absolute p-1 rounded-md md:right-3 bg-transparent dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-gray-500 transition-colors disabled:opacity-40 top-1/2 -translate-y-1/2'
        >
          <SendHorizontal className='w-5 h-5' />
        </Button>
      </div>
    </form>
  );
}

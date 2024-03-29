'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const SubscriptionButton = ({ userIsSubscribed = false }: { userIsSubscribed: boolean }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        description: 'Something went wrong',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button size='sm' variant={userIsSubscribed ? 'default' : 'premium'} disabled={loading} onClick={onClick}>
      {userIsSubscribed ? 'Manage Subscription' : 'Upgrade'}
      {!userIsSubscribed && <Sparkles className='w-4 h-4 ml-2 fill-white' />}
    </Button>
  );
};

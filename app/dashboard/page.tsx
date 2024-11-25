"use client";

import { useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect if not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // Prevent rendering until the user state is resolved
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user.name || 'User'}!</p>
      <Button onClick={logout} className="mt-4">
        Logout
      </Button>
    </div>
  );
}

"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect if not logged in
    } else {
      setLoading(false); // Stop loading once the user is authenticated
    }
  }, [user, router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state until user is resolved
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.name || 'User'}!</p>
      <Button onClick={logout} className="mt-4">
        Logout
      </Button>
    </div>
  );
}

'use client';

import Tabs from '../components/Tabs';
import Profile from '../components/Profile';
import CallHistory from '../components/CallHistory';
import SetupCall from '../components/SetupCall';

export default function Home() {
  const tabs = [
    { title: 'Profile', content: <Profile /> },
    { title: 'Call History', content: <CallHistory /> },
    { title: 'Setup Call', content: <SetupCall /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

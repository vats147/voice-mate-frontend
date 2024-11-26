'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Tabs = ({ tabs }: { tabs: { title: string; content: React.ReactNode }[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant={activeTab === index ? 'default' : 'outline'}
            onClick={() => setActiveTab(index)}
            className="px-4 py-2"
          >
            {tab.title}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;

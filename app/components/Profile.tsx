'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    credits: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user profile data
  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated.');
        return;
      }

      const response = await axios.get('http://172.20.192.20:3000/api/signup', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data[0]);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch profile.');
      setLoading(false);
    }
  };

  // Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById('razorpay-script')) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.id = 'razorpay-script';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment process
  const handlePayment = async (amount: number, credits: number) => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      setError('Failed to load Razorpay script. Please try again.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated.');
        return;
      }

      // Call backend to generate Razorpay order
      const response = await axios.post(
        'http://172.20.192.20:3000/api/create-order',
        { amount: amount * 100 }, // Convert to paise for Razorpay
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { id: orderId } = response.data;

      // Razorpay options
      const options = {
        key: 'rzp_test_IKbSSWBkSxqaox', // Replace with your Razorpay test key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Recharge Credits',
        description: `Purchase ${credits} credits`,
        order_id: orderId,
        locale:"en",
        handler: async function (response: any) {
          try {
            // Verify payment on the backend
            const verifyResponse = await axios.post(
              'http://172.20.192.20:3000/api/verifyPayment',
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                credits,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            // Update user credits
            setUser((prev) => ({ ...prev, credits: prev.credits + credits }));
            setError(null);
          } catch (err) {
            setError('Payment verification failed.');
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      setError('Failed to initiate payment.');
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  // Fetch user profile on page load
  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full min-h-[300px]">
        <p className="text-xl text-gray-600 font-medium">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full min-h-[300px]">
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>

      {/* Profile Details */}
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-gray-600 text-sm font-semibold">Name</p>
          <p className="text-lg text-gray-900">{user.name}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-semibold">Email</p>
          <p className="text-lg text-gray-900">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-semibold">Credits</p>
          <p className="text-lg text-gray-900">{user.credits} credits</p>
        </div>
      </div>

      {/* Pricing Options */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recharge Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            onClick={() => handlePayment(50, 10)}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            ₹50 for 10 credits
          </Button>
          <Button
            onClick={() => handlePayment(100, 25)}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            ₹100 for 25 credits
          </Button>
          <Button
            onClick={() => handlePayment(200, 60)}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            ₹200 for 60 credits
          </Button>
        </div>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <Button onClick={handleLogout} variant="outline" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;

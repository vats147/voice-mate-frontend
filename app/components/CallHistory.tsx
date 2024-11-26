'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table';
import axios from 'axios';

const CallHistory = () => {
  const [callHistory, setCallHistory] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCallHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User is not authenticated.');
        return;
      }

      const response = await axios.get('http://172.20.192.20:3000/api/history', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCallHistory(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch call history.');
      setLoading(false);
    }
  };

  const handleAudioPlayPause = (url: string) => {
    if (audio && audioPlaying === url) {
      audio.pause();
      setAudioPlaying(null);
    } else {
      if (audio) audio.pause();
      const newAudio = new Audio(url);
      setAudio(newAudio);
      setAudioPlaying(url);
      newAudio.play();
    }
  };

  useEffect(() => {
    fetchCallHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full min-h-[300px]">
        <p className="text-xl text-gray-600 font-medium">Loading call history...</p>
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Call History</h2>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <Table className="w-full text-left border-collapse">
         
          <TableBody>
            {callHistory.map((call: any) => (
              <TableRow
                key={call.apiDetails.c_id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {call.apiDetails.from}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {call.apiDetails.to}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      call.apiDetails.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {call.apiDetails.status}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {call.apiDetails.call_length?.toFixed(2) || '0.00'}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap space-x-2 flex items-center">
                  {/* Transcript Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-xs">
                      Summary
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                      <DialogHeader>
                        <DialogTitle className="text-lg font-semibold text-gray-800">
                          Call Summary
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">
                          {call.apiDetails.summary || 'No transcript available'}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Play/Pause Recording */}
                  {call.apiDetails.recording_url ? (
                    <Button
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleAudioPlayPause(call.apiDetails.recording_url)}
                    >
                      {audioPlaying === call.apiDetails.recording_url ? 'Pause' : 'Play'} Recording
                    </Button>
                  ) : (
                    <span className="text-gray-500 text-sm">No Recording</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CallHistory;

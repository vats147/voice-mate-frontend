"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const SetupCall = () => {
  const [activeTab, setActiveTab] = useState<"hotels" | "services">("hotels");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [language, setLanguage] = useState("en"); // Default: English
  const [voice, setVoice] = useState<"male" | "female">("female");
  const [negotiatePrice, setNegotiatePrice] = useState(true);
  const [recordCall, setRecordCall] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [hotelInstructions, setHotelInstructions] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Custom Tabs for Hotels and Services */}
      <div className="flex justify-center mb-6">
        <Button
          variant={activeTab === "hotels" ? "default" : "outline"}
          onClick={() => setActiveTab("hotels")}
          className={`px-6 py-3 mr-2 ${
            activeTab === "hotels" ? "bg-gray-900 text-white" : "text-gray-500"
          }`}
        >
          Hotels
        </Button>
        <Button
          variant={activeTab === "services" ? "default" : "outline"}
          onClick={() => setActiveTab("services")}
          className={`px-6 py-3 ${
            activeTab === "services"
              ? "bg-gray-900 text-white"
              : "text-gray-500"
          }`}
        >
          Services
        </Button>
      </div>

      {/* Hotels Tab Content */}
      {activeTab === "hotels" && (
        <div className="space-y-6">
          {/* Date and Time Selection */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <Label className="block mb-2 font-bold">Select Date:</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <Label className="block mb-2 font-bold">Select Time:</Label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

         

          {/* Phone Number */}
          <div>
            <Label className="block mb-2 font-bold">Phone Number:</Label>
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="+91888751426"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full"
              />
              <Button variant="outline">📋</Button>
            </div>
          </div>

           {/* Custom Instructions */}
           <div>
            <Label className="block mb-2 font-bold">
              Special Instructions for Hotels:
            </Label>
            <textarea
              placeholder="Add any special requests or instructions"
              value={hotelInstructions}
              onChange={(e) => setHotelInstructions(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              rows={4} // You can adjust the number of rows as needed
            ></textarea>
          </div>
        </div>
      )}

      {/* Services Tab Content */}
      {activeTab === "services" && (
        <div className="space-y-6">
          {/* Service Input */}
          <div>
            <Label className="block mb-2 font-bold">Service:</Label>
            <Input
              type="text"
              placeholder="Search services..."
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full"
            />
          </div>
          {/* Additional Details */}
          <div>
            <Label className="block mb-2 font-bold">Additional Details:</Label>
            <Input
              type="text"
              placeholder="Example: dog walking services"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      )}

      {/* Settings Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="settings">
          <AccordionTrigger>
            Settings: Language, Voice, Price, Recording
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {/* Language Selection */}
              <div>
                <Label className="block mb-2 font-bold">Call Language:</Label>
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hi">Hindi</SelectItem>

                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="en-US">English (US)</SelectItem>
                    <SelectItem value="en-GB">English (UK)</SelectItem>
                    <SelectItem value="en-AU">English (Australia)</SelectItem>
                    <SelectItem value="en-NZ">English (New Zealand)</SelectItem>
                    <SelectItem value="en-IN">English (India)</SelectItem>
                    <SelectItem value="zh">
                      Chinese (Mandarin, Simplified)
                    </SelectItem>
                    <SelectItem value="zh-CN">
                      Chinese (Mandarin, Simplified, China)
                    </SelectItem>
                    <SelectItem value="zh-Hans">
                      Chinese (Mandarin, Simplified, Hans)
                    </SelectItem>
                    <SelectItem value="zh-TW">
                      Chinese (Mandarin, Traditional)
                    </SelectItem>
                    <SelectItem value="zh-Hant">
                      Chinese (Mandarin, Traditional, Hant)
                    </SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="es-419">
                      Spanish (Latin America)
                    </SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="fr-CA">French (Canada)</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="el">Greek</SelectItem>
                    <SelectItem value="hi-Latn">
                      Hindi (Latin script)
                    </SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                    <SelectItem value="ko">Korean</SelectItem>
                    <SelectItem value="ko-KR">Korean (Korea)</SelectItem>
                    <SelectItem value="pt">Portuguese</SelectItem>
                    <SelectItem value="pt-BR">Portuguese (Brazil)</SelectItem>
                    <SelectItem value="it">Italian</SelectItem>
                    <SelectItem value="nl">Dutch</SelectItem>
                    <SelectItem value="pl">Polish</SelectItem>
                    <SelectItem value="ru">Russian</SelectItem>
                    <SelectItem value="sv">Swedish</SelectItem>
                    <SelectItem value="sv-SE">Swedish (Sweden)</SelectItem>
                    <SelectItem value="da">Danish</SelectItem>
                    <SelectItem value="da-DK">Danish (Denmark)</SelectItem>
                    <SelectItem value="fi">Finnish</SelectItem>
                    <SelectItem value="id">Indonesian</SelectItem>
                    <SelectItem value="ms">Malay</SelectItem>
                    <SelectItem value="tr">Turkish</SelectItem>
                    <SelectItem value="uk">Ukrainian</SelectItem>
                    <SelectItem value="bg">Bulgarian</SelectItem>
                    <SelectItem value="cs">Czech</SelectItem>
                    <SelectItem value="ro">Romanian</SelectItem>
                    <SelectItem value="sk">Slovak</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Voice Type */}
              <div>
                <Label className="block mb-2 font-bold">Voice Type:</Label>
                <div className="flex space-x-4">
                  <Button
                    variant={voice === "male" ? "default" : "outline"}
                    onClick={() => setVoice("male")}
                  >
                    Male
                  </Button>
                  <Button
                    variant={voice === "female" ? "default" : "outline"}
                    onClick={() => setVoice("female")}
                  >
                    Female
                  </Button>
                </div>
              </div>

              {/* Negotiate Price */}
              <div>
                <Label className="block mb-2 font-bold">Negotiate Price?</Label>
                <div className="flex space-x-4">
                  <Button
                    variant={negotiatePrice ? "default" : "outline"}
                    onClick={() => setNegotiatePrice(true)}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={!negotiatePrice ? "default" : "outline"}
                    onClick={() => setNegotiatePrice(false)}
                  >
                    No
                  </Button>
                </div>
              </div>

              {/* Record Call */}
              <div>
                <Label className="block mb-2 font-bold">Record the Call?</Label>
                <div className="flex space-x-4">
                  <Button
                    variant={recordCall ? "default" : "outline"}
                    onClick={() => setRecordCall(true)}
                  >
                    Yes
                  </Button>
                  <Button
                    variant={!recordCall ? "default" : "outline"}
                    onClick={() => setRecordCall(false)}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Submit Button */}
      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
        Initiate Call
      </Button>
    </div>
  );
};

export default SetupCall;

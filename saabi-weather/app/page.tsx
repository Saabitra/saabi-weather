"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#00008b]/80 via-[#1F5A82] to-[#87CEEB] p-10 flex flex-col justify-center items-center">
      <Card className="shadow-lg max-w-4xl mx-auto">
        <Text className="text-5xl font-semibold text-center mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f56772]/70 to-[#7280ff]/80 drop-shadow-lg dropshadow-md">
            Howz Weather
          </span>
          
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13, Tailwind CSS, Tremor 2.0 & More!!
        </Subtitle>

        <Divider className="my-7" />

        <Card className="bg-gradient-to-br from-[#e8e895a4] to-[#dd6060a7]">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}

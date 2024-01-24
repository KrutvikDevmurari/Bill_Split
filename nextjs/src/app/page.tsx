"use client";
import { Button } from "@/Components/Elements/Button";
import Input from "@/Components/Elements/Input";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<any>(null)

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="h-[953px]">
      <div className="bg-gradient-to-br from-amber-300 via-yellow-300 to-transparent relative">
        <div className="bg-[url('/BillMain.svg')] bg-no-repeat bg-contain bg-right h-[400px]">
          <div className="w-1/2 absolute left-[30px] bottom-[50px]  text-center text-white bg-black bg-opacity-5 font-bold text-[65px] rounded-[20px]">
            {' '}
            Bill Splitter
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-[30px] m-0">What's the event or activity?</h1>
          <p className="text-[16px]">To help you identify the cost split</p>
          <div className="my-4 w-full">
            <Input value={inputValue} onChange={handleInputChange} placeholder={"Name"} />
          </div>
          {/* <label className="text-left">Base currency</label>
          <select>USD</select> */}
          <Button variant="danger">Continue</Button>
          <p>Powerd By</p>

        </div>
      </div>
    </div>
  );
}

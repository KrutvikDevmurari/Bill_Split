import { Button } from "@/Components/Elements/Button";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-amber-300 via-yellow-300 to-transparent relative">
        <div className="bg-[url('/BillMain.svg')] bg-no-repeat bg-contain bg-right h-[400px]">
          <div className="w-1/2 absolute left-[30px] bottom-[50px]  text-center text-white bg-black bg-opacity-5 font-bold text-[65px] rounded-[20px] ">
            {' '}
            Bill Splitter
          </div>
        </div>
      </div>
      {/* <div>
        <h1>What's the event or activity?</h1>
        <p>To help you identify the cost split</p>
        <input />


        <label>Base currency</label>
        <select>USD</select>

        <Button isLoading={false} variant="inverse" >Continue</Button>
        <p>Powerd By Viztech Solutions</p>
      </div> */}
    </div>
  );
}

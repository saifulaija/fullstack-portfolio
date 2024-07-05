import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";
import Image from 'next/image';
import assets from "@/assets";

interface NoDataProps {
  message?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function NoData({
  message = "No Data Available",
  description = "There is no data to display at the moment.",
  buttonText = "Reload",
  onButtonClick = () => window.location.reload(),
}: NoDataProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <Image 
        src={assets.images.noDataFound} 
        alt="No Data" 
        width={200} // replace with your desired width
        height={200} // replace with your desired height
        className="w-1/2 max-w-xs mb-4" 
      />
     
      <h2 className="text-xl font-semibold text-gray-700">{message}</h2>
      <p className="text-gray-500 mb-4">{description}</p>
      <Button asChild className="group" onClick={onButtonClick}>
        <div className="flex items-center cursor-pointer">
          {buttonText}
          <RefreshCcw className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 ml-2" />
        </div>
      </Button>
    </div>
  );
}

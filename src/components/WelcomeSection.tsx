import React from "react";
import { BasicButton } from "./button/BasicButton";

interface CongratulationsSectionProps { }

const CongratulationsSection: React.FC<CongratulationsSectionProps> = () => {
  return (
    <div className="flex items-center justify-center mt-4 md:mt-32 focus:outline-none">
      <div className="bg-[#EEF1F559] bg-opacity-30 p-4 md:p-8 border rounded-md max-w-md text-center">
        <img
          className="mx-auto h-12 w-auto mb-4"
          alt="Suburban Logo"
          title="Suburban Logo"
          src="/logo.svg"
        />
        <p className="font-semibold text-lg md:text-xl">
          Congratulations on Purchasing your new computer!
        </p>
        <p className="text-sm md:text-base">
          You can now manage it using Console.{" "}
          <strong>Visit [Your_IP_Address]:9595</strong> to Get Started.
        </p>
        <p className="text-sm md:text-base">
          Console comes preinstalled on your virtual machine on Suburban.{" "}
        </p>
      </div>
    </div>
  );
};

export default CongratulationsSection;

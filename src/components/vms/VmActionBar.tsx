import Link from 'next/link';
import React from 'react';

interface VmActionBarProps {}

export const VmActionBar: React.FC<VmActionBarProps> = () => {
  return (
    <div
      className={`flex items-center mt-10 px-4 py-2 bg-[#EEF1F559] bg-opacity-30 border mr-[2.5rem] ml-[2.5rem] rounded-sm`}
    ></div>
  );
};

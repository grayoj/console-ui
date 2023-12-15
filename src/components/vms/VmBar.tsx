import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface VmBarProps {}

export const VmBar: React.FC<VmBarProps> = () => {
  const router = useRouter();

  const isActive = (pathname: string): boolean => {
    return router.pathname === pathname;
  };

  return (
    <div
      className={`flex items-center mt-10 px-4 py-2 bg-[#EEF1F559] bg-opacity-30 border mr-[2.5rem] ml-[2.5rem] rounded-sm`}
    >
      <Link href='/vms'>
        <h3
          className={`text-sm font-semibold ${
            isActive('/vms') ? 'text-[#D50036]' : 'text-gray-700'
          } hover:text-[#D50036] mr-6 cursor-pointer`}
        >
          Manage Virtual Machine
        </h3>
      </Link>

      <Link href='/vms/scale'>
        <h3
          className={`text-sm font-semibold ${
            isActive('/vms/scale') ? 'text-[#D50036]' : 'text-gray-700'
          } hover:text-[#D50036] mr-6 cursor-pointer`}
        >
          Scale Virtual Machine
        </h3>
      </Link>

      <Link href='/vms/create'>
        <h3
          className={`text-sm font-semibold ${
            isActive('/vms/create') ? 'text-[#D50036]' : 'text-gray-700'
          } hover:text-[#D50036] mr-6 cursor-pointer`}
        >
          Create Virtual Machine
        </h3>
      </Link>

      <Link href='/vms/delete'>
        <h3
          className={`text-sm font-semibold ${
            isActive('/vms/delete') ? 'text-[#D50036]' : 'text-gray-700'
          } hover:text-[#D50036] mr-6 cursor-pointer`}
        >
          Delete Virtual Machine
        </h3>
      </Link>
    </div>
  );
};

import React from "react";

interface PageFooterProps { }

export const PageFooter: React.FC<PageFooterProps> = () => {
  return (
    <footer className="bg-[#EEF1F559] bg-opacity-30 border bottom-0 fixed bottom-0 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://suburbancloud.ng"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="h-20 w-auto"
              src="https://web.suburbancloud.ng/wp-content/uploads/2023/11/logo-black-red.svg"
              alt="Suburban Fiber Company"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://suburbancloud.ng/" className="hover:underline">
            Suburban Cloud™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

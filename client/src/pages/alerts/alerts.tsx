import LBar from "@/components/mine/LBar/Lbar";
import { useState } from "react";
import { Exceptions } from "@/components/mine/exceptions/exceptions"
import {Issues} from "@/components/mine/issues/issues"
export const Alerts = () => {
  const [showExceptions, setShowExceptions] = useState(true)
  const [showIssues, setShowIssues] = useState(true)
  return (
    <div className="min-h-screen overflow-hidden">
      <LBar />
      <div className="ml-[80px] mr-[30px] my-16">
        <div>
          <div className="mb-3 flex items-center space-x-3 hover:cursor-pointer">
            <span className="text-xl font-bold">Exceptions</span>
            <span onClick={() => setShowExceptions(!showExceptions)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-500 ${showExceptions ? 'rotate-180' : 'rotate-0'}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
          <div
            className={`${showExceptions ? 'max-h-[1000px]' : 'max-h-0'
              } overflow-hidden transition-all duration-500 ease-in-out`}
          >
            {
              showExceptions && <Exceptions />
            }
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center space-x-3 hover:cursor-pointer">
            <span className="text-xl font-bold">Issues</span>
            <span onClick={() => setShowIssues(!showIssues)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-500 ${showIssues ? 'rotate-180' : 'rotate-0'}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </div>
          <div
            className={`${showIssues ? 'max-h-[1000px]' : 'max-h-0'
              } overflow-hidden transition-all duration-500 ease-in-out`}
          >
            {
              showIssues && <Issues />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

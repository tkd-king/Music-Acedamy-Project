"use client";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "../ui/Background-Gradient";
import "../../app/globals.css"

const FeatureSection = () => {
  return (
    <div className="px-[50px] py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:4xl">
          Learn With the Best
        </p>
      </div>
      <div className="mt-10">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <BackgroundGradient>
            <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow h-full max-w-sm ">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  guitar fundamentals
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  learn the basic of playing guitar with our comprehensive
                  biginer's course.
                </p>
                <Link
                  href={"#"}
                  className="mt-[10px] px-4 py-[5px] rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow h-full max-w-sm ">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  guitar fundamentals
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  learn the basic of playing guitar with our comprehensive
                  biginer's course.
                </p>
                <Link
                  href={"#"}
                  className="mt-[10px] px-4 py-[5px] rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow h-full max-w-sm ">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  guitar fundamentals
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  learn the basic of playing guitar with our comprehensive
                  biginer's course.
                </p>
                <Link
                  href={"#"}
                  className="mt-[10px] px-4 py-[5px] rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow h-full max-w-sm ">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  guitar fundamentals
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  learn the basic of playing guitar with our comprehensive
                  biginer's course.
                </p>
                <Link
                  href={"#"}
                  className="mt-[10px] px-4 py-[5px] rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient>
            <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow h-full max-w-sm ">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  guitar fundamentals
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  learn the basic of playing guitar with our comprehensive
                  biginer's course.
                </p>
                <Link
                  href={"#"}
                  className="mt-[10px] px-4 py-[5px] rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/FeatureSection"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    
    </div>
  );
};

export default FeatureSection;

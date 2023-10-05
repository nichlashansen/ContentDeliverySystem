"use client";
import { useState } from "react";
import {
  Bars3Icon,
  EnvelopeIcon,
  CogIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`fixed h-screen w-${
        collapsed ? "16" : "64"
      } bg-gray-800 text-white flex flex-col items-end justify-between p-4`}
    >
      <div className="absolute top-0 right-0 m-4">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <ChevronRightIcon className="h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <ul className="mt-16">
        <li className="flex items-center justify-between border-b border-gray-600 py-4 px-4">
          <Link href="/orders" className="flex items-center">
            <Bars3Icon className="h-5 w-5 mr-3" />
            {!collapsed && <span>Orders</span>}
          </Link>
        </li>
        <li className="flex items-center justify-between border-b border-gray-600 py-4 px-4">
          <Link href="/messages" className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 mr-3" />
            {!collapsed && <span>Messages</span>}
          </Link>
        </li>
        <li className="flex items-center justify-between border-b border-gray-600 py-4 px-4">
          <Link href="/settings" className="flex items-center">
            <CogIcon className="h-5 w-5 mr-3" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

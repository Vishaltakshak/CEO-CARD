"use client"

import { useState } from "react"
import { SecurityOnClick, TwofactorOnclick } from "./ProfilePage3-OnClick" // Assuming these are existing components

export const ProfilePage3 = () => {
  const [active, setActive] = useState(0)

  return (
    <div className="max-w-4xl mx-auto pb-6">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold text-black">Security</h2>
          <p className="text-sm text-gray-500">Change your security settings, set up secure authentication, or delete your account.</p>
        </div>

        <div className="space-y-6 p-6">
          {/* Password Section */}
          <div className="space-y-6 border-b pb-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-black">Password</h3>
              {active === 0 ? (
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-900">Reset your password regularly to keep your account secure</p>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition ease-in-out duration-150"
                    onClick={() => setActive(1)}
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <SecurityOnClick active={active} setActive={setActive} />
              )}
            </div>
          </div>

          {/* Two Factor Authentication Section */}
          <div className="space-y-6 border-b pb-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-black">Two-factor authentication</h3>
              {active === 0 ? (
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-black">
                    Download an authenticator app. If you don't have an authenticator app installed, we recommend
                    Google Authenticator or Microsoft Authenticator.
                  </p>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition ease-in-out duration-150"
                    onClick={() => setActive(1)}
                  >
                    Setup
                  </button>
                </div>
              ) : (
                <TwofactorOnclick active={active} setActive={setActive} />
              )}
            </div>
          </div>

          {/* Active Sessions Section */}
          <div className="space-y-6 border-b pb-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-black">Active Sessions</h3>
              <div className="text-sm text-gray-500">
                <p className="text-black">Selecting "Sign out" will sign you out from all devices except this one. This can take up to 10 minutes.</p>
              </div>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none transition ease-in-out duration-150"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Delete Account Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-center text-black">Delete Account</h3>
              <div className="text-sm text-black">
                <p  className="text-black text-left">Permanently delete your account</p>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none transition ease-in-out duration-150"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

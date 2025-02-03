import React from 'react';
import { Clock, MapPin, Phone, Mail, FileText } from 'lucide-react';

const NavService = ({ service }) => {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6">
      <div className="max-w-3xl mx-4">
        <div className="bg-black rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 md:p-6 border-b border-gray-700">
            <h1 className="text-xl md:text-2xl font-bold text-black">
              {service.CardTitle}
            </h1>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 space-y-6">
            {/* Description */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 mt-1 text-black flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-black">Description</h3>
                <p className="text-black mt-1 break-words w-[80%]">
                  {service.ContentDescription}
                </p>
              </div>
            </div>

          
            {service.Offer && (
              <div className="flex items-start gap-3">
                {/* <span className="w-5 h-5 mt-1 text-gray-400 flex-shrink-0 font-semibold">₹</span> */}
                <div>
                  <h3 className="font-semibold text-black">Offer</h3>
                  <p className="text-black mt-1">
                    Offer: {service.Offer}
					
                  </p>
                </div>
              </div>
            )}

            {/* Contact Details Section */}
            <div className="pt-4 border-t">
              <h2 className="text-lg font-semibold text-black mb-4">Contact Information</h2>
              
              {/* Contact Number */}
              <div className="flex items-start gap-3 mb-4">
                <Phone className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-black mt-1">
                    {service.ContactNumber}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text- flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-black mt-1 break-words">
                    {service.ContactMail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavService;
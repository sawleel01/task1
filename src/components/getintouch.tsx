"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
  employer: string;
}

export default function GetInTouchModal({
  isOpen,
  onClose,
  employer,
}: GetInTouchModalProps) {
  if (!isOpen) return null;

  // Mock contact details based on employer
  const getContactDetails = (employer: string) => {
    if (employer.includes("George Eliot")) {
      return {
        name: "George Eliot Hospital",
        address: [
          "George Eliot Hospital",
          "College Street",
          "Nuneaton",
          "Warwickshire",
          "CV10 7DJ",
        ],
        phone: "024 7635 1351",
      };
    } else {
      return {
        name: "Imperial College Healthcare NHS Trust",
        address: [
          "Imperial College Healthcare NHS Trust",
          "Du Cane Road",
          "London",
          "Greater London",
          "W12 0HS",
        ],
        phone: "020 3313 1000",
      };
    }
  };

  const contactDetails = getContactDetails(employer);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                • Employer contact details
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Address</p>
                  <div className="text-sm text-gray-700 space-y-0.5">
                    {contactDetails.address.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    Contact Number
                  </p>
                  <p className="text-sm text-gray-700">
                    {contactDetails.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

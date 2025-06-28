"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApplicationView() {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="flex justify-start mb-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Close
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded mb-4">
            <span className="font-bold text-lg">NHS</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">
            George Eliot Hospital
          </h1>
          <p className="text-blue-600 font-medium">NHS Trust</p>
        </div>

        {/* Application Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Application for employment
        </h2>

        {/* Application Summary */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Application for</p>
                <p className="text-gray-700">Staff Nurse</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Job ref</p>
                <p className="text-gray-700">230-9999-SN06-E-MW-G</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Closing date</p>
                <p className="text-gray-700">18-May-2025</p>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">
                  Application submitted
                </p>
                <p className="text-gray-700">18-May-2025 22:38</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Application ID</p>
                <p className="text-gray-700">178517183</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Applicant</p>
                <p className="text-gray-700">Anchala Mainali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Personal details
          </h3>

          <div className="mb-6 text-sm text-gray-600 space-y-2">
            <p>
              Answers given in this part of the form are to help the Recruitment
              Centre to manage your application.
            </p>
            <p>
              If you have any difficulty completing this form please ask someone
              to help you.
            </p>
            <p>
              We would like to take this opportunity to thank you for applying.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-6">
            Personal details
          </h4>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                Title
              </div>
              <div className="md:col-span-2 text-gray-700">Ms</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                Forename
              </div>
              <div className="md:col-span-2 text-gray-700">Anchala</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                Middle name(s)
              </div>
              <div className="md:col-span-2 text-gray-700">-</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                Surname
              </div>
              <div className="md:col-span-2 text-gray-700">Mainali</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                Address
              </div>
              <div className="md:col-span-2 text-gray-700">
                2 mansion garden
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                City / town
              </div>
              <div className="md:col-span-2 text-gray-700">
                Peterborough whittlesey
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 text-right md:text-right">
                County
              </div>
              <div className="md:col-span-2 text-gray-700">United kingdom</div>
            </div>
          </div>
        </div>

        {/* Additional sections would go here in a real application */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Employment History
          </h3>
          <p className="text-gray-600 text-sm">
            Employment history details would be displayed here...
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Education & Qualifications
          </h3>
          <p className="text-gray-600 text-sm">
            Education and qualification details would be displayed here...
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Supporting Information
          </h3>
          <p className="text-gray-600 text-sm">
            Supporting information and personal statement would be displayed
            here...
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AlertTriangle, ChevronDown, TrendingUp } from "lucide-react";

interface ApplicationDetailProps {
  onBack: () => void;
}

export default function ApplicationDetail({ onBack }: ApplicationDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Trac proudly powers the recruitment for
              </p>
              <h1 className="text-2xl font-bold text-gray-900">
                George Eliot Hospital NHS Trust
              </h1>
              <Button variant="outline" className="mt-3 text-sm bg-transparent">
                View employer information
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="text-right">
              <div className="text-blue-600 font-bold text-lg">NHS</div>
              <div className="text-sm text-gray-600">George Eliot Hospital</div>
              <div className="text-sm text-blue-600 font-medium">NHS Trust</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Warning Banner */}
        <Card className="bg-orange-50 border-orange-200">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-orange-900">
                  Login changes are coming
                </h3>
                <p className="text-sm text-orange-800">
                  From July 2025 onwards, Multi-Factor Authentication (MFA) will
                  be introduced to this site. This will add an extra step to the
                  login process: a requirement to enter a One Time Passcode
                  (OTP) upon login to minimise fraud and maintain security. See
                  our summary page{" "}
                  <a
                    href="#"
                    className="text-orange-700 underline hover:text-orange-900"
                  >
                    here
                  </a>{" "}
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Application Card */}
        <Card className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Unsuccessful
                </Badge>
                <h2 className="text-2xl font-bold text-gray-900">
                  Staff Nurse
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Last update:</span> 19-May-2025
                </p>
              </div>
              <div className="text-right text-xs text-gray-500">
                <div>Ref: 230-9999-SN06-E-MW-G</div>
                <div>Application ID: 17551183</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-teal-600 hover:bg-teal-700">
                About this job
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Get in touch
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                View application
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Download application
              </Button>
            </div>
          </div>
        </Card>

        {/* Application History */}
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Application history
                </h3>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                Reverse order
              </Button>
            </div>

            <div className="space-y-8">
              {/* Submitted Status */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-gray-900 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Submitted
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Started application date
                      </p>
                      <p className="text-gray-600">18-May-2025 14:47</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Submission date
                      </p>
                      <p className="text-gray-600">18-May-2025</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-1">
                        Vacancy closed date
                      </p>
                      <p className="text-gray-600">19-May-2025 00:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unsuccessful Status */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-gray-900 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Unsuccessful
                  </h4>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900 mb-1">
                      Application unsuccessful
                    </p>
                    <p className="text-gray-600">19-May-2025 13:45</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Back Button */}
        <div className="flex justify-start">
          <Button variant="outline" onClick={onBack}>
            ← Back to Applications
          </Button>
        </div>
      </div>
    </div>
  );
}

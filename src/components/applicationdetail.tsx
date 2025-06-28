"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  ChevronDown,
  TrendingUp,
  ArrowLeft,
  Download,
} from "lucide-react";
import GetInTouchModal from "@/components/getintouch";
import AboutJobModal from "@/components/aboutjob";

interface ApplicationDetailProps {
  onBack: () => void;
}

export default function ApplicationDetail({ onBack }: ApplicationDetailProps) {
  const [showGetInTouchModal, setShowGetInTouchModal] = useState(false);
  const [showAboutJobModal, setShowAboutJobModal] = useState(false);
  const [currentView, setCurrentView] = useState<"detail" | "application">(
    "detail"
  );
  const [isDownloading, setIsDownloading] = useState(false);

  // Job data for the current application
  const jobData = {
    title: "Staff Nurse",
    employer: "George Eliot Hospital NHS Trust",
    specialty: "Nursing",
    type: "Permanent, Full time, Part time. 37.5 hours per week (Various Hours Available - Full time & Part time)",
    salary: "£29,970 - £36,483 per annum pro rata",
    location:
      "George Eliot Hospital NHS Trust, College Street, Nuneaton, CV10 7DJ, Warwickshire",
    jobRef: "230-9999-SN06-E-MW-G",
    status: "Unsuccessful",
  };

  const handleViewApplication = () => {
    setCurrentView("application");
  };

  const handleDownloadApplication = async () => {
    setIsDownloading(true);

    try {
      // Create the application content as HTML
      const applicationContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Application for Employment - ${jobData.title}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              margin: 40px; 
              color: #333;
            }
            .header { 
              text-align: center; 
              margin-bottom: 30px; 
              border-bottom: 2px solid #0066cc;
              padding-bottom: 20px;
            }
            .nhs-logo { 
              background: #0066cc; 
              color: white; 
              padding: 10px 20px; 
              display: inline-block; 
              font-weight: bold; 
              margin-bottom: 10px;
            }
            .section { 
              margin-bottom: 30px; 
            }
            .section-title { 
              font-size: 18px; 
              font-weight: bold; 
              margin-bottom: 15px; 
              color: #0066cc;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
            }
            .info-grid { 
              display: grid; 
              grid-template-columns: 1fr 1fr; 
              gap: 20px; 
              margin-bottom: 20px; 
            }
            .info-item { 
              margin-bottom: 10px; 
            }
            .info-label { 
              font-weight: bold; 
              margin-bottom: 5px; 
            }
            .personal-details-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 15px;
            }
            .personal-details-table td {
              padding: 10px;
              border-bottom: 1px solid #ddd;
            }
            .personal-details-table td:first-child {
              font-weight: bold;
              width: 30%;
              text-align: right;
              padding-right: 20px;
            }
            .status-badge {
              background: #dc2626;
              color: white;
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: bold;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="nhs-logo">NHS</div>
            <h1>George Eliot Hospital NHS Trust</h1>
            <h2>Application for Employment</h2>
          </div>

          <div class="section">
            <div class="section-title">Application Summary</div>
            <div class="info-grid">
              <div>
                <div class="info-item">
                  <div class="info-label">Application for:</div>
                  <div>Staff Nurse</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Job Reference:</div>
                  <div>230-9999-SN06-E-MW-G</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Closing Date:</div>
                  <div>18-May-2025</div>
                </div>
              </div>
              <div>
                <div class="info-item">
                  <div class="info-label">Application Submitted:</div>
                  <div>18-May-2025 22:38</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Application ID:</div>
                  <div>178517183</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Status:</div>
                  <div><span class="status-badge">Unsuccessful</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Personal Details</div>
            <p>Answers given in this part of the form are to help the Recruitment Centre to manage your application.</p>
            
            <table class="personal-details-table">
              <tr>
                <td>Title</td>
                <td>Ms</td>
              </tr>
              <tr>
                <td>Forename</td>
                <td>Anchala</td>
              </tr>
              <tr>
                <td>Middle name(s)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Surname</td>
                <td>Mainali</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>2 mansion garden</td>
              </tr>
              <tr>
                <td>City / town</td>
                <td>Peterborough whittlesey</td>
              </tr>
              <tr>
                <td>County</td>
                <td>United kingdom</td>
              </tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">Employment History</div>
            <p>Employment history details would be displayed here...</p>
          </div>

          <div class="section">
            <div class="section-title">Education & Qualifications</div>
            <p>Education and qualification details would be displayed here...</p>
          </div>

          <div class="section">
            <div class="section-title">Supporting Information</div>
            <p>Supporting information and personal statement would be displayed here...</p>
          </div>

          <div class="footer">
            <p>Application downloaded on ${new Date().toLocaleDateString(
              "en-GB"
            )} at ${new Date().toLocaleTimeString("en-GB")}</p>
            <p>George Eliot Hospital NHS Trust - Application Management System</p>
          </div>
        </body>
        </html>
      `;

      // Create a blob with the HTML content
      const blob = new Blob([applicationContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = `Application_${jobData.jobRef}_Anchala_Mainali.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL
      URL.revokeObjectURL(url);

      // Optional: Also create a simple text version
      setTimeout(() => {
        const textContent = `
APPLICATION FOR EMPLOYMENT
George Eliot Hospital NHS Trust

Application Summary:
- Position: Staff Nurse
- Job Reference: 230-9999-SN06-E-MW-G
- Application ID: 178517183
- Status: Unsuccessful
- Submitted: 18-May-2025 22:38
- Closing Date: 18-May-2025

Personal Details:
- Name: Ms Anchala Mainali
- Address: 2 mansion garden, Peterborough whittlesey, United kingdom

Employment History:
Employment history details would be displayed here...

Education & Qualifications:
Education and qualification details would be displayed here...

Supporting Information:
Supporting information and personal statement would be displayed here...

Downloaded on: ${new Date().toLocaleDateString(
          "en-GB"
        )} at ${new Date().toLocaleTimeString("en-GB")}
        `;

        const textBlob = new Blob([textContent], { type: "text/plain" });
        const textUrl = URL.createObjectURL(textBlob);

        const textLink = document.createElement("a");
        textLink.href = textUrl;
        textLink.download = `Application_${jobData.jobRef}_Anchala_Mainali.txt`;
        document.body.appendChild(textLink);
        textLink.click();
        document.body.removeChild(textLink);

        URL.revokeObjectURL(textUrl);
      }, 500);
    } catch (error) {
      console.error("Error downloading application:", error);
      alert(
        "There was an error downloading your application. Please try again."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  // Application View Component
  if (currentView === "application") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <div className="flex justify-start mb-4">
            <Button
              variant="outline"
              onClick={() => setCurrentView("detail")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Application Details
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
                Answers given in this part of the form are to help the
                Recruitment Centre to manage your application.
              </p>
              <p>
                If you have any difficulty completing this form please ask
                someone to help you.
              </p>
              <p>
                We would like to take this opportunity to thank you for
                applying.
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
                <div className="md:col-span-2 text-gray-700">
                  United kingdom
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections */}
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

  // Default Detail View
  return (
    <>
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
                <Button
                  variant="outline"
                  className="mt-3 text-sm bg-transparent"
                >
                  View employer information
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="text-right">
                <div className="text-blue-600 font-bold text-lg">NHS</div>
                <div className="text-sm text-gray-600">
                  George Eliot Hospital
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  NHS Trust
                </div>
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
                    From July 2025 onwards, Multi-Factor Authentication (MFA)
                    will be introduced to this site. This will add an extra step
                    to the login process: a requirement to enter a One Time
                    Passcode (OTP) upon login to minimise fraud and maintain
                    security. See our summary page{" "}
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
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800"
                  >
                    Unsuccessful
                  </Badge>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Staff Nurse
                  </h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Last update:</span>{" "}
                    19-May-2025
                  </p>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <div>Ref: 230-9999-SN06-E-MW-G</div>
                  <div>Application ID: 17551183</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => setShowAboutJobModal(true)}
                >
                  About this job
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => setShowGetInTouchModal(true)}
                >
                  Get in touch
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={handleViewApplication}
                >
                  View application
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={handleDownloadApplication}
                  disabled={isDownloading}
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Download application
                    </>
                  )}
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

      {/* Modals */}
      <GetInTouchModal
        isOpen={showGetInTouchModal}
        onClose={() => setShowGetInTouchModal(false)}
        employer="George Eliot Hospital NHS Trust"
      />

      <AboutJobModal
        isOpen={showAboutJobModal}
        onClose={() => setShowAboutJobModal(false)}
        jobData={jobData}
      />
    </>
  );
}

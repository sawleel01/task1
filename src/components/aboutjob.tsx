"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, AlertTriangle, Info } from "lucide-react";

interface AboutJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobData: {
    title: string;
    employer: string;
    specialty: string;
    type: string;
    salary: string;
    location: string;
    jobRef: string;
    status: string;
  };
}

export default function AboutJobModal({
  isOpen,
  onClose,
  jobData,
}: AboutJobModalProps) {
  if (!isOpen) return null;

  // Mock additional job details based on the employer
  const getJobDetails = (employer: string) => {
    if (employer.includes("George Eliot")) {
      return {
        interviewDate: "09/06/2025",
        closingDate: "18th May 2025",
        interviewDateScheduled: "9th June 2025",
        description: `George Eliot Hospital NHS Trust opened in 1948 and provides a range of elective, non-elective, surgical, medical, women's, children's, diagnostic and therapeutic services to a population of more than 350,000 people.

The hub of the Trust is located on the outskirts of Nuneaton and its services cover a large footprint, including north Warwickshire, south west Leicestershire, and north Coventry. We also provide primary and community services across Coventry, Warwickshire and Leicestershire.

Our vision is "to EXCEL at patient care". If you think you've got what it takes, help us realise this and join #TeamEliot.

Don't meet every single requirement? Studies have shown that women and people of colour aren't as likely to apply unless they meet every qualification of non specialist roles.

We're dedicated to building a diverse, inclusive workplace, so if you're excited about this role and meet our values, but your experience doesn't align perfectly with everything in the Job Description or Person Specification- apply anyway or email the Recruiting Manager to discuss the role further.

We are proud to support the Armed Forces community. We are a Veteran Aware and Reservist Friendly organisation and welcome applications from Veterans, Reservists, Cadet Instructors, and family members of serving personnel.`,
        contractDetails: {
          type: "Permanent",
          hours: "Various Hours Available - Full time & Part time",
          hoursPerWeek:
            "37.5 hours per week (Various Hours Available - Full time & Part time)",
        },
      };
    } else {
      return {
        interviewDate: "15/06/2025",
        closingDate: "23rd June 2025",
        interviewDateScheduled: "15th June 2025",
        description: `Imperial College Healthcare NHS Trust is one of the largest NHS trusts in England, providing acute and specialist healthcare for a population of nearly two million people.

We are committed to providing world-class healthcare and are at the forefront of medical innovation and research. Our hospitals include Charing Cross, Hammersmith, Queen Charlotte's & Chelsea, St Mary's and Western Eye hospitals.

Join our team and be part of an organisation that values excellence, innovation, and compassionate care.`,
        contractDetails: {
          type: "Permanent",
          hours: "Full time",
          hoursPerWeek: "37.5 hours per week",
        },
      };
    }
  };

  const jobDetails = getJobDetails(jobData.employer);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl bg-white max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              About this job
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

          {/* Job Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-sm text-gray-700">{jobData.location}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Contract type & working pattern
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                {jobDetails.contractDetails.type},
              </p>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Full time</li>
                <li>Part time</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                {jobDetails.contractDetails.hoursPerWeek}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Salary</h3>
              <p className="text-sm text-gray-700">{jobData.salary}, Yearly,</p>
              <p className="text-sm text-gray-700">(Band 5)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Specialty</h3>
              <p className="text-sm text-gray-700">{jobData.specialty}</p>
            </div>
          </div>

          {/* Interview Date */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Interview date</h3>
            <p className="text-sm text-gray-700">{jobDetails.interviewDate}</p>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {jobDetails.description}
            </div>
          </div>

          {/* Job Overview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Job overview
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Staff Nurse</span>
              </p>
              <p>
                <span className="font-semibold">
                  {jobDetails.contractDetails.hours}
                </span>
              </p>
              <p>
                <span className="font-semibold">
                  {jobDetails.contractDetails.type}
                </span>
              </p>
              <p>
                <span className="font-semibold">Salary:</span> {jobData.salary}
              </p>
              <p>
                <span className="font-semibold">Closing Date:</span>{" "}
                {jobDetails.closingDate}
              </p>
              <p>
                <span className="font-semibold">Interview Date:</span>{" "}
                {jobDetails.interviewDateScheduled}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                **This post may close early due to{" "}
                <em>high numbers of applications</em>, so you are advised to
                apply promptly. **
              </p>
              <p className="text-xs text-gray-600 mt-2">
                All correspondence for this vacancy will be sent by email;
                please check your account regularly including your Junk and SPAM
                areas.
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                A great and friendly place to work, so bring your passion,
                commitment and expertise and enjoy the opportunities to make a
                difference every day.
              </p>
            </div>
          </div>

          {/* Applicant Requirements */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Applicant requirements
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-md">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-orange-800">
                  You must have appropriate UK professional registration.
                </p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  This post is subject to the Rehabilitation of Offenders Act
                  1974 (Exceptions) Order 1975 (Amendment) (England and Wales)
                  Order 2020 and it will be necessary for a submission for
                  Disclosure to be made to the Disclosure and Barring Service.
                </p>
              </div>
            </div>
          </div>

          {/* Person Specification */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Person specification
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Experience and Knowledge
                </h4>
                <h5 className="font-medium text-gray-800 mb-2">
                  Essential criteria
                </h5>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>
                    Undertaken wide experience during training in an acute
                    setting
                  </li>
                  <li>
                    Able to demonstrate clinical knowledge, skills and expertise
                  </li>
                  <li>
                    Demonstrate the use of evidence based practice in a care
                    setting
                  </li>
                  <li>
                    Demonstrates the awareness and impact of clinical governance
                  </li>
                  <li>Critical analytical skills</li>
                  <li>Knowledge and application of NMC Code of Conduct</li>
                </ul>
                <h5 className="font-medium text-gray-800 mb-2 mt-3">
                  Desirable criteria
                </h5>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Evidence of Research or Clinical Audit</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Qualifications & Training
                </h4>
                <h5 className="font-medium text-gray-800 mb-2">
                  Essential criteria
                </h5>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>NMC Registered</li>
                  <li>
                    Nursing Degree/Diploma/Hospital completion of NMC approved
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

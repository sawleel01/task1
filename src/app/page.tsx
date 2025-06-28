"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertTriangle,
  User,
  Calendar,
  MapPin,
  PoundSterlingIcon as Pound,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import ApplicationDetail from "@/components/applicationdetail";

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [draftFilter, setDraftFilter] = useState(false);
  const [unsuccessfulFilter, setUnsuccessfulFilter] = useState(false);
  const [sortOrder, setSortOrder] = useState("last-update");
  const [reverseOrder, setReverseOrder] = useState(false);
  const [currentView, setCurrentView] = useState<"list" | "detail">("list");

  const applications = [
    {
      id: "17948766",
      jobRef: "290-MIC-1676",
      status: "Draft",
      title: "Staff Nurse",
      employer: "Imperial College Healthcare NHS Trust",
      specialty: "Haemodialysis",
      type: "Permanent, Full time - 37.5 hours per week",
      salary: "£34,521 - £41,956 pa inclusive(Band 5)",
      location: "London, Central Middlesex Hospital",
      submitBefore: "23-Jun-2025 23:59",
      lastUpdate: "23-Jun-2025",
      needsCompletion: true,
    },
    {
      id: "17948726",
      jobRef: "290-MIC-1676",
      status: "Draft",
      title: "Staff Nurse",
      employer: "Imperial College Healthcare NHS Trust",
      specialty: "Haemodialysis",
      type: "Permanent, Full time - 37.5 hours per week",
      salary: "£34,521 - £41,956 pa inclusive(Band 5)",
      location: "London, Central Middlesex Hospital",
      submitBefore: "23-Jun-2025 23:59",
      lastUpdate: "23-Jun-2025",
      needsCompletion: true,
    },
    {
      id: "17551183",
      jobRef: "230-9999-SN06-E-MW-G",
      status: "Unsuccessful",
      title: "Staff Nurse",
      employer: "George Eliot Hospital NHS Trust",
      specialty: "Nursing",
      type: "Permanent, Full time, Part time. 37.5 hours per week (Various Hours Available - Full time & Part time)",
      salary: "£29,970 - £36,483 per annum pro rata(Band 5)",
      location: "Nuneaton, George Eliot Hospital NHS Trust",
      lastUpdate: "19-May-2025",
    },
    {
      id: "17948755",
      jobRef: "290-MIC-1677",
      status: "Draft",
      title: "Healthcare Assistant",
      employer: "Imperial College Healthcare NHS Trust",
      specialty: "General Medicine",
      type: "Permanent, Part time - 20 hours per week",
      salary: "£22,383 - £24,336 pa inclusive(Band 3)",
      location: "London, Hammersmith Hospital",
      submitBefore: "30-Jun-2025 23:59",
      lastUpdate: "20-Jun-2025",
      needsCompletion: true,
    },
  ];

  // Calculate counts dynamically
  const applicationCounts = useMemo(() => {
    const total = applications.length;
    const draft = applications.filter((app) => app.status === "Draft").length;
    const unsuccessful = applications.filter(
      (app) => app.status === "Unsuccessful"
    ).length;
    const submitted = applications.filter(
      (app) => app.status === "Submitted"
    ).length;

    return { total, draft, unsuccessful, submitted };
  }, [applications]);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.employer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDraft = !draftFilter || app.status === "Draft";
    const matchesUnsuccessful =
      !unsuccessfulFilter || app.status === "Unsuccessful";

    return matchesSearch && matchesDraft && matchesUnsuccessful;
  });

  if (currentView === "detail") {
    return <ApplicationDetail onBack={() => setCurrentView("list")} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Warning Banner */}
        <Card className="bg-orange-50 border-orange-200">
          <div className="p-6 pt-0">
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

        {/* Applications Header */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
            {applicationCounts.total}
          </Badge>
        </div>

        {/* Search and Filters */}
        <Card>
          <div className="p-6 pt-0">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-3">
                  Search your applications
                </h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Job ref or Job title or Employer"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Search
                  </Button>
                </div>
              </div>
              <div className="lg:w-80">
                <h3 className="font-medium text-gray-900 mb-3">
                  Limit by application status
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="draft"
                      checked={draftFilter}
                      onCheckedChange={(checked) =>
                        setDraftFilter(checked === true)
                      }
                    />
                    <label htmlFor="draft" className="text-sm">
                      Draft ({applicationCounts.draft})
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="unsuccessful"
                      checked={unsuccessfulFilter}
                      onCheckedChange={(checked) =>
                        setUnsuccessfulFilter(checked === true)
                      }
                    />
                    <label htmlFor="unsuccessful" className="text-sm">
                      Unsuccessful ({applicationCounts.unsuccessful})
                    </label>
                  </div>
                  {applicationCounts.submitted > 0 && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="submitted" />
                      <label htmlFor="submitted" className="text-sm">
                        Submitted ({applicationCounts.submitted})
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Displaying results 1-{filteredApplications.length} of{" "}
            {filteredApplications.length}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by</span>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-update">Last update</SelectItem>
                  <SelectItem value="job-title">Job title</SelectItem>
                  <SelectItem value="employer">Employer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setReverseOrder(!reverseOrder)}
              className="bg-teal-600 text-white hover:bg-teal-700"
            >
              Reverse order
            </Button>
          </div>
        </div>

        {/* Application Cards */}
        <div className="space-y-4">
          {filteredApplications.map((app) => (
            <Card key={app.id} className="relative">
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  app.status === "Draft" ? "bg-orange-400" : "bg-red-500"
                }`}
              />
              <div className="p-6 pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Badge
                      variant="secondary"
                      className={
                        app.status === "Draft"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {app.status}
                    </Badge>
                    <div className="text-right text-xs text-gray-500">
                      <div>Job ref {app.jobRef}</div>
                      <div>Application ID {app.id}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {app.title}
                  </h2>
                  <p className="text-gray-700 font-medium">{app.employer}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>{app.specialty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{app.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Pound className="h-4 w-4 text-gray-500" />
                    <span>{app.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{app.location}</span>
                  </div>
                </div>

                {app.submitBefore && (
                  <div className="text-sm">
                    <span className="font-medium">Submit before</span>{" "}
                    {app.submitBefore}
                  </div>
                )}

                {app.lastUpdate && !app.submitBefore && (
                  <div className="text-sm">
                    <span className="font-medium">Last update:</span>{" "}
                    {app.lastUpdate}
                  </div>
                )}

                {app.needsCompletion && (
                  <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-md">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-orange-800">
                      Please complete your application before {app.submitBefore}
                    </span>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={() => setCurrentView("detail")}
                  >
                    {app.status === "Draft"
                      ? "Complete your application"
                      : "Manage application"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

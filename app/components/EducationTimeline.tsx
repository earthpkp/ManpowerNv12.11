"use client";

import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface Education {
  year: string;
  degree: string;
  institution: string;
  location: string;
  achievements?: string[];
}

interface EducationTimelineProps {
  educationList: Education[];
}

export function EducationTimeline({ educationList }: EducationTimelineProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <GraduationCap className="h-6 w-6" />
        ประวัติการศึกษา
      </h2>
      <div className="space-y-8">
        {educationList.map((education, index) => (
          <div key={index} className="relative pl-8 pb-8">
            {/* Timeline line */}
            {index !== educationList.length - 1 && (
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
            )}
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-primary bg-white dark:bg-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            {/* Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg">{education.degree}</h3>
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {education.year}
                </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {education.institution}, {education.location}
                </span>
              </div>
              {education.achievements && education.achievements.length > 0 && (
                <div className="mt-3 space-y-2">
                  {education.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-primary mt-1" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
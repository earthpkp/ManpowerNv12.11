'use client';

import { Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Worker } from '../types/worker';
import Link from 'next/link';
import Image from 'next/image';

interface WorkerCardProps {
  worker: Worker;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-4 gap-6">
        {/* Profile Image */}
        <div className="md:col-span-1">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={worker.image}
              alt={`${worker.name} profile`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>

        {/* Worker Info */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {worker.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
                <Briefcase className="h-4 w-4 mr-2" />
                {worker.position}
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-2" />
                {worker.location}
              </p>
            </div>
            <div
              className={`px-3 py-1 rounded-full ${
                worker.available
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {worker.available ? 'พร้อมทำงาน' : 'ไม่ว่าง'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ประสบการณ์
              </p>
              <p className="font-medium">{worker.experience} ปี</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                เงินเดือนที่ต้องการ
              </p>
              <p className="font-medium">{worker.salary}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              ทักษะ
            </p>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {worker.description && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                รายละเอียด
              </p>
              <p className="text-sm mt-1">{worker.description}</p>
            </div>
          )}
        </div>

        {/* Contact and Action */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div className="space-y-3">
            {worker.email && (
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span>{worker.email}</span>
              </div>
            )}
            {worker.phone && (
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span>{worker.phone}</span>
              </div>
            )}
          </div>

          <Link href={`/worker/${worker.id}`} className="mt-4">
            <Button className="w-full">ดูข้อมูลเพิ่มเติม</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

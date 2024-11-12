import { workers } from "@/app/data/workers";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award,
  ArrowLeft 
} from "lucide-react";

interface WorkerPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return workers.map((worker) => ({
    id: worker.id.toString(),
  }));
}

export async function generateMetadata({ params }: WorkerPageProps): Promise<Metadata> {
  const worker = workers.find((w) => w.id.toString() === params.id);
  return {
    title: worker ? `${worker.name} - ${worker.position}` : "Worker Profile",
    description: worker?.description || "Worker profile details",
  };
}

export default function WorkerPage({ params }: WorkerPageProps) {
  const worker = workers.find((w) => w.id.toString() === params.id);

  if (!worker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">ไม่พบข้อมูลผู้สมัคร</h1>
          <Link href="/">
            <Button>กลับสู่หน้าหลัก</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-2" />
          กลับสู่หน้าหลัก
        </Link>

        <Card className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {worker.name}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <Briefcase className="h-5 w-5 mr-2" />
                {worker.position}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                {worker.location}
              </div>
            </div>
            <div
              className={`px-4 py-2 rounded-full ${
                worker.available
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {worker.available ? "พร้อมทำงาน" : "ไม่ว่าง"}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">ข้อมูลทั่วไป</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300">ประสบการณ์</p>
                  <p className="font-medium">{worker.experience} ปี</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">เงินเดือนที่ต้องการ</p>
                  <p className="font-medium">{worker.salary}</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">รายละเอียด</p>
                  <p className="font-medium">{worker.description}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">ข้อมูลติดต่อ</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-600" />
                  <p>{worker.email}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-600" />
                  <p>{worker.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">ทักษะ</h2>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2" />
              การศึกษา
            </h2>
            <ul className="space-y-2">
              {worker.education?.map((edu, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2" />
              ใบรับรองและประกาศนียบัตร
            </h2>
            <ul className="space-y-2">
              {worker.certifications?.map((cert, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </main>
  );
}
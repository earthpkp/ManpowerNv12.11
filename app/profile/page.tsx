"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserCircle, Mail, Phone, MapPin, Briefcase, Save, LogOut } from "lucide-react";
import { EducationTimeline } from "../components/EducationTimeline";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    skills: "",
    experience: "",
    education: "",
    certifications: "",
    about: "",
  });

  const educationList = [
    {
      year: "2560 - 2564",
      degree: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
      institution: "จุฬาลงกรณ์มหาวิทยาลัย",
      location: "กรุงเทพมหานคร",
      achievements: [
        "เกียรตินิยมอันดับ 1",
        "หัวหน้าทีมโครงการพัฒนาแอปพลิเคชันมือถือ",
        "ได้รับทุนการศึกษาดีเด่น",
      ],
    },
    {
      year: "2557 - 2560",
      degree: "มัธยมศึกษาตอนปลาย",
      institution: "โรงเรียนเตรียมอุดมศึกษา",
      location: "กรุงเทพมหานคร",
      achievements: [
        "เกรดเฉลี่ย 3.95",
        "ประธานชมรมคอมพิวเตอร์",
        "รางวัลชนะเลิศการแข่งขันโอลิมปิกคอมพิวเตอร์ระดับเขต",
      ],
    },
  ];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    // Mock profile data - Replace with actual API call
    setProfile({
      name: "สมชาย ใจดี",
      email: localStorage.getItem("userEmail") || "",
      phone: "02-xxx-xxxx",
      location: "กรุงเทพมหานคร",
      position: "วิศวกรซอฟต์แวร์",
      skills: "JavaScript, React, Node.js",
      experience: "5 ปี",
      education: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
      certifications: "AWS Certified Developer, Professional Scrum Master I",
      about: "วิศวกรซอฟต์แวร์ที่มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชัน",
    });
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add save profile logic here
    alert("บันทึกข้อมูลเรียบร้อย");
  };

  if (isLoading) {
    return <div>กำลังโหลด...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <UserCircle className="h-16 w-16 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">ข้อมูลส่วนตัว</h1>
                <p className="text-gray-600 dark:text-gray-400">จัดการข้อมูลและการตั้งค่าบัญชีของคุณ</p>
              </div>
            </div>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              ออกจากระบบ
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">อีเมล</Label>
                <div className="relative">
                  <Input
                    id="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="pl-10"
                  />
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">ที่อยู่</Label>
                <div className="relative">
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="pl-10"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">ตำแหน่ง</Label>
                <div className="relative">
                  <Input
                    id="position"
                    value={profile.position}
                    onChange={(e) => setProfile({ ...profile, position: e.target.value })}
                    className="pl-10"
                  />
                  <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">ประสบการณ์</Label>
                <Input
                  id="experience"
                  value={profile.experience}
                  onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">ทักษะ</Label>
              <Input
                id="skills"
                value={profile.skills}
                onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                placeholder="เช่น JavaScript, React, Node.js"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="certifications">ใบรับรองและประกาศนียบัตร</Label>
              <Input
                id="certifications"
                value={profile.certifications}
                onChange={(e) => setProfile({ ...profile, certifications: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">เกี่ยวกับฉัน</Label>
              <Textarea
                id="about"
                value={profile.about}
                onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              <Save className="h-4 w-4 mr-2" />
              บันทึกข้อมูล
            </Button>
          </form>
        </Card>

        <Card className="p-8">
          <EducationTimeline educationList={educationList} />
        </Card>
      </div>
    </div>
  );
}
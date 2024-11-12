"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            มีคำถามหรือข้อสงสัย? ติดต่อเราได้ตลอดเวลา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                ข้อมูลการติดต่อ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">อีเมล</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@manpowernext.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">โทรศัพท์</h3>
                    <p className="text-gray-600 dark:text-gray-300">02-xxx-xxxx</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">ที่อยู่</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 ถนนสุขุมวิท แขวงคลองเตย<br />
                      เขตคลองเตย กรุงเทพมหานคร 10110
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              ส่งข้อความถึงเรา
            </h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ชื่อ-นามสกุล
                </label>
                <Input id="name" type="text" placeholder="กรุณากรอกชื่อ-นามสกุล" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  อีเมล
                </label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  หัวข้อ
                </label>
                <Input id="subject" type="text" placeholder="หัวข้อที่ต้องการติดต่อ" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  ข้อความ
                </label>
                <Textarea id="message" placeholder="กรุณากรอกข้อความ" rows={4} />
              </div>
              <Button className="w-full" type="submit">
                <Send className="h-4 w-4 mr-2" />
                ส่งข้อความ
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
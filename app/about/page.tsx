"use client";

import { Users, Target, Shield, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "ค้นหาบุคลากรคุณภาพ",
      description: "เราคัดสรรบุคลากรที่มีความสามารถและประสบการณ์ตรงตามความต้องการของคุณ"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "ตรงตามเป้าหมาย",
      description: "ระบบค้นหาที่แม่นยำช่วยให้คุณพบบุคลากรที่เหมาะสมกับองค์กรของคุณ"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "ความปลอดภัยสูงสุด",
      description: "ข้อมูลทั้งหมดได้รับการปกป้องด้วยระบบความปลอดภัยระดับสูง"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "รับประกันคุณภาพ",
      description: "เรารับประกันคุณภาพของบุคลากรทุกคนที่ผ่านการคัดเลือกจากเรา"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            เกี่ยวกับ ManpowerNEXT
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            เราเป็นผู้นำด้านการจัดหาบุคลากรที่มีคุณภาพ 
            ด้วยประสบการณ์กว่า 10 ปีในการจับคู่บุคลากรที่เหมาะสมกับองค์กรชั้นนำ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-300">บุคลากรที่ผ่านการคัดเลือก</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">องค์กรที่ไว้วางใจ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">อัตราความพึงพอใจ</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            พันธกิจของเรา
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            เรามุ่งมั่นที่จะเป็นสะพานเชื่อมระหว่างบุคลากรที่มีความสามารถกับองค์กรชั้นนำ 
            เพื่อสร้างโอกาสและความสำเร็จร่วมกัน ด้วยเทคโนโลยีที่ทันสมัยและการบริการที่เป็นเลิศ
          </p>
        </div>
      </div>
    </div>
  );
}
// src/app/page.tsx

import Link from 'next/link';
// استيراد أيقونات تعبر عن مهاراتك الرئيسية لتزيين الصفحة
import { FaLinux, FaDocker, FaNetworkWired, FaCode, FaArrowLeft } from 'react-icons/fa';

export default function Home() {
  return (
    // نستخدم min-h-[80vh] لنجعل هذا القسم يملأ معظم الشاشة، مع استخدام flex لتوسيط المحتوى عمودياً
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* خلفية تفاعلية (عناصر زينة) لتعطي طابعاً تقنياً عصرياً */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

      {/* الحاوية الرئيسية للمحتوى (موضوعة فوق الخلفية باستخدام z-10) */}
      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* عبارة ترحيبية صغيرة أو تصنيف (Badge) */}
        <div className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6 shadow-sm">
          👋 أهلاً بك في مساحتي التقنية
        </div>

        {/* العنوان الرئيسي الجاذب (Hero Headline) */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          تحويل التحديات التقنية إلى <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            حلول استراتيجية مبتكرة
          </span>
        </h1>

        {/* الوصف الموجز (Subtitle) */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          أنا <strong>عبدالعزيز المالكي</strong>، أجمع بين خبرة 10 سنوات في البنية التحتية وهندسة الشبكات، والاتصال الاستراتيجي لبناء أنظمة تقنية متكاملة تدعم نجاح أعمالك.
        </p>

        {/* أزرار اتخاذ الإجراء (CTA Buttons) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* الزر الرئيسي البارز */}
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 group"
          >
            تصفح مشاريعي
            {/* أيقونة سهم تتحرك عند مرور الفأرة */}
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>

          {/* الزر الثانوي */}
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-bold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm"
          >
            دعنا نتحدث
          </Link>
        </div>

        {/* شريط المهارات التقنية السريع (Tech Stack Banner) */}
        <div className="border-t border-gray-200 pt-8 mt-8 max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 font-semibold mb-6 uppercase tracking-wider">
            أبرز التقنيات والبيئات التي أعمل عليها
          </p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            {/* استخدام أيقونات لتمثيل التقنيات مع تأثير تغيير اللون عند الهوفر */}
            <div className="flex flex-col items-center gap-2 hover:text-gray-900 transition-colors cursor-help" title="Linux & Servers">
              <FaLinux className="text-4xl" />
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-blue-500 transition-colors cursor-help" title="Docker & Containers">
              <FaDocker className="text-4xl" />
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-green-600 transition-colors cursor-help" title="Networking & Security">
              <FaNetworkWired className="text-4xl" />
            </div>
            <div className="flex flex-col items-center gap-2 hover:text-indigo-500 transition-colors cursor-help" title="Web Development">
              <FaCode className="text-4xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
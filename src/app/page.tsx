// src/app/page.tsx
import Link from 'next/link';
import { FcLinux } from 'react-icons/fc';
// استيراد الأيقونات
import { FaLinux, FaDocker, FaNetworkWired, FaCode, FaArrowLeft } from 'react-icons/fa';

export default function Home() {
  return (
    // خلفية داكنة جداً (Slate-950) تقترب من الأسود
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">

      {/* 1. تأثير الشبكة التقنية (Grid) في الخلفية */}
      {/* هذه كلاسات متقدمة في Tailwind ترسم خطوط شبكية وتجعلها تتلاشى في الأطراف */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[24px_24px] mask-image-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* 2. إضاءة خافتة متحركة لتعطي طابع أضواء السيرفرات (Pulse Animation) */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-slate-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>

      {/* الحاوية الرئيسية للمحتوى */}
      <div className="container mx-auto px-4 relative z-10 text-center">

        {/* تصنيف (Badge) بألوان داكنة وسكرية */}
        <div className="inline-block px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium text-sm mb-6 backdrop-blur-sm">
          أهلاً بك في مساحتي التقنية
        </div>

        {/* العنوان الرئيسي (استخدمنا bg-linear-to-r هنا لحل التحذير) */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          تحويل التحديات التقنية إلى <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-200 to-gray-500">
            حلول استراتيجية مبتكرة
          </span>
        </h1>

        {/* الوصف الموجز بلون قمري (Slate-400) مريح للعين */}
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          أنا <strong className="text-white">عبدالعزيز المالكي</strong>، أجمع بين خبرة 10 سنوات في البنية التحتية وهندسة الشبكات، والاتصال الاستراتيجي لبناء أنظمة تقنية متكاملة تدعم نجاح أعمالك.
        </p>

        {/* الأزرار بتصميم داكن وفخم */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* الزر الرئيسي: أبيض/سكري مع نص أسود ليلفت الانتباه (High Contrast) */}
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
          >
            تصفح مشاريعي
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>

          {/* الزر الثانوي: شفاف مع حدود قمرية */}
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-300 border-2 border-slate-700 font-bold rounded-full hover:border-slate-400 hover:text-white transition-all duration-300"
          >
            دعنا نتحدث
          </Link>
        </div>

        {/* شريط المهارات التقنية */}
        <div className="border-t border-slate-800/60 pt-8 mt-8 max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 font-semibold mb-6 uppercase tracking-widest">
            أبرز التقنيات والبيئات
          </p>
          <div className="flex justify-center items-center gap-8 text-slate-600">
            {/* لينكس: أصفر/أبيض */}
            <div className="relative group cursor-help w-10 h-10 flex items-center justify-center transform hover:scale-110 duration-300" title="Linux & Servers">
              {/* الأيقونة الرمادية تختفي عند الهوفر (opacity-0) */}
              <FaLinux className="text-4xl text-slate-600 absolute transition-opacity duration-300 group-hover:opacity-0" />
              {/* الأيقونة الملونة تظهر عند الهوفر (opacity-100) */}
              <FcLinux className="text-4xl absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            {/* دوكر: أزرق */}
            <div className="hover:text-blue-500 transition-colors cursor-help transform hover:scale-110 duration-200" title="Docker & Containers">
              <FaDocker className="text-4xl" />
            </div>
            {/* شبكات: أخضر */}
            <div className="hover:text-emerald-500 transition-colors cursor-help transform hover:scale-110 duration-200" title="Networking & Security">
              <FaNetworkWired className="text-4xl" />
            </div>
            {/* ويب: بنفسجي */}
            <div className="hover:text-purple-500 transition-colors cursor-help transform hover:scale-110 duration-200" title="Web Development">
              <FaCode className="text-4xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
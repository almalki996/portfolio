// src/app/layout.tsx

import type { Metadata } from "next";
// 1. استيراد خط Cairo بدلاً من Geist
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// 2. إعداد خط Cairo ليدعم اللغة العربية وبأوزان مختلفة
const cairo = Cairo({
  subsets: ["arabic"], // تحديد دعم الحروف العربية
  weight: ["300", "400", "500", "600", "700", "800"], // أوزان الخط (من النحيف للعريض)
  display: 'swap', // لتحسين سرعة ظهور الخط (Best Practice)
});

export const metadata: Metadata = {
  title: "عبدالعزيز المالكي | IT & Systems Engineer",
  description: "محفظة عبدالعزيز المالكي، خبير أنظمة وتقنية معلومات متخصص في البنية التحتية والاتصال الاستراتيجي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // تأكدنا من تحديد اللغة العربية واتجاه النص من اليمين لليسار
    <html lang="ar" dir="rtl">
      <body
        // 3. تطبيق كلاس خط Cairo على كامل الموقع، مع لون خلفية فاتح جداً مريح للعين
        className={`${cairo.className} antialiased bg-slate-950 text-slate-300 flex flex-col min-h-screen`}>
        <Header />

        {/* نستخدم flex-grow لجعل المحتوى يتمدد ويدفع الفوتر للأسفل دائماً */}
        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
import Link from "next/link";

export default function Header() {
    return (
        // العنصر header: ثابت في الأعلى (sticky) مع تأثير الزجاج (backdrop-blur)
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            {/* حاوية لتوسيط المحتوى وتحديد أقصى عرض له */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* قسم الشعار (Logo) */}
                <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                    عبدالعزيز المالكي |<span className="font-medium text-gray-500 text-sm"> IT & Systems Engineer</span>

                </Link>

                {/* قسم روابط التنقل (Navigation) */}
                <nav className="flex items-center gap-6 font-medium">
                    {/* رابط الصفحة الرئيسية مع تأثيرات عند مرور الفأرة */}
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                    >
                        الرئيسية
                    </Link>

                    <Link
                        href="/aboutMe"
                        className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                    >
                        عني
                    </Link>

                    <Link
                        href="/projects"
                        className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                    >
                        مشاريعي
                    </Link>

                    {/* زر تواصل اختياري بتصميم بارز */}
                    <Link
                        href="/contact"
                        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        تواصل معي
                    </Link>
                </nav>

            </div>
        </header>
    );
}
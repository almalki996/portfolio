// src/components/Footer.tsx

// 1. استيراد أيقونة اليوتيوب (FaYoutube) بجانب الأيقونات السابقة
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {

    // 2. فصلنا الألوان عن الكلاس الأساسي لنتمكن من تخصيص كل أيقونة
    const baseIconClasses = "p-2 rounded-full text-slate-500 transition-all duration-300 transform ease-in-out shadow-sm bg-slate-800/30 hover:-translate-y-1 hover:scale-110";

    return (
        <footer className="bg-slate-950 text-slate-400 py-6 border-t border-slate-800/50 mt-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* قسم حقوق النشر مفصول بوسم bdi لمنع تداخل النصوص والأرقام */}
                    <div className="text-center md:text-right text-sm text-slate-500 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                        <span>جميع الحقوق محفوظة <bdi className="mx-1">&copy; {new Date().getFullYear()}</bdi> عبدالعزيز المالكي.</span>
                        <span className="hidden md:inline text-slate-700">|</span>
                        <span>مُطور بكل 💖 في المملكة العربية السعودية.</span>
                    </div>

                    {/* قسم الأيقونات الاجتماعية بألوان الهوية البصرية */}
                    <div className="flex items-center gap-4">

                        {/* GitHub: لون أبيض وخلفية داكنة */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            className={`${baseIconClasses} hover:text-slate-100 hover:bg-slate-700`}>
                            <FaGithub className="w-5 h-5" />
                        </a>

                        {/* LinkedIn: اللون الأزرق الرسمي (#0A66C2) */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            className={`${baseIconClasses} hover:text-[#0A66C2] hover:bg-[#0A66C2]/10`}>
                            <FaLinkedin className="w-5 h-5" />
                        </a>

                        {/* X (Twitter): لون أبيض ناصع */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                            className={`${baseIconClasses} hover:text-white hover:bg-slate-800`}>
                            <FaXTwitter className="w-5 h-5" />
                        </a>

                        {/* YouTube: اللون الأحمر الرسمي (#FF0000) */}
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                            className={`${baseIconClasses} hover:text-[#FF0000] hover:bg-[#FF0000]/10`}>
                            <FaYoutube className="w-5 h-5" />
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}
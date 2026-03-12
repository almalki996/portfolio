// استيراد الأيقونات من مكتبة react-icons 
// لاحظ أننا نجلب GitHub و LinkedIn من حزمة 'fa' العادية
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// ونجلب أيقونة X الحديثة من حزمة 'fa6' المحدثة
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {

    // كلاسات Tailwind المشتركة للروابط وتأثيرات الهوفر الاحترافية
    const socialLinkClasses = "p-2 rounded-full text-gray-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 transform ease-in-out bg-gray-800/50 hover:bg-blue-600/20 shadow-sm";

    return (
        <footer className="bg-gray-950 text-gray-300 py-10 border-t border-gray-800/50 mt-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* قسم حقوق النشر */}
                    <div className="text-center md:text-right text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} عبدالعزيز المالكي. جميع الحقوق محفوظة. مطور بكل ❤️ في السعودية.
                    </div>

                    {/* قسم الأيقونات الاجتماعية */}
                    <div className="flex items-center gap-4">

                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={socialLinkClasses}>
                            <FaGithub className="w-6 h-6" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={socialLinkClasses}>
                            <FaLinkedin className="w-6 h-6" />
                        </a>

                        {/* استخدام أيقونة منصة X الجديدة هنا */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={socialLinkClasses}>
                            <FaXTwitter className="w-6 h-6" />
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}
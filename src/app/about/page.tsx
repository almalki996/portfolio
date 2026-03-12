// src/app/about/page.tsx

// استيراد المكونات الأساسية من Next.js
import Image from 'next/image';
import Link from 'next/link';
// استيراد أيقونات تعبر عن مهاراتك المختلفة
import { FaServer, FaNetworkWired, FaBullhorn, FaLaptopCode } from 'react-icons/fa';

export default function AboutMe() {
    const myName = "عبدالعزيز المالكي";

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">

            {/* القسم العلوي: النبذة الشخصية والصورة */}
            {/* أضفنا mb-24 لزيادة المسافة الفاصلة بين هذا القسم وقسم البطاقات */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">

                {/* عمود النص التعريفي */}
                {/* استخدمنا text-justify هنا لوزن أطراف النص بدلاً من text-right */}
                <div className="md:col-span-8 space-y-6 text-justify leading-relaxed">
                    <span className="text-blue-500 font-bold tracking-wide block text-lg">
                        مبرمج، مهندس أنظمة، وخبير اتصال استراتيجي
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-right">
                        أهلاً، أنا <span className="text-blue-500">{myName}</span>
                    </h2>

                    {/* استخدام التعداد النقطي للفقرات الطويلة لتسهيل القراءة */}
                    <ul className="text-lg text-slate-300 leading-loose list-disc list-inside space-y-4">
                        <li>
                            أجمع بين التفكير الاستراتيجي المكتسب من بكالوريوس <strong className="text-slate-200">الإعلام والاتصال</strong>، وبين الخبرة التقنية العميقة التي تمتد لأكثر من 10 سنوات في قطاع تقنية المعلومات.
                        </li>
                        <li>
                            تدرجت في مسيرتي المهنية بين الدعم الفني، والمبيعات التقنية المتقدمة في كبرى الشركات مثل <strong className="text-slate-200">مكتبة جرير</strong>، وصولاً إلى إدارة <strong className="text-slate-200">العلاقات والتقنية</strong> في القطاع غير الربحي.
                        </li>
                        <li>
                            أمتلك شغفاً كبيراً بتصميم المواقع، إدارة البنى التحتية، وتقديم حلول تقنية متكاملة ترفع من كفاءة العمل وتلبي احتياجات المستخدمين بدقة.
                        </li>
                    </ul>
                </div>

                {/* عمود الصورة الشخصية */}
                {/* أضفنا ترتيباً (order-first md:order-last) لتظهر الصورة فوق النص في الجوال وبجانبه في الشاشات الكبيرة */}
                <div className="md:col-span-4 flex justify-center md:justify-end order-first md:order-last mb-8 md:mb-0">
                    <div className="relative p-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden aspect-square w-full max-w-sm group">
                        <Image
                            src="/m.jpeg"
                            alt={`صورة ${myName}`}
                            fill
                            className="object-cover rounded-xl group-hover:scale-105 group-hover:rotate-1 transition duration-500"
                            sizes="(max-width: 768px) 100vw, 400px"
                            priority
                        />
                        {/* توهج أزرق خفيف خلف الصورة */}
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none rounded-xl"></div>
                    </div>
                </div>
            </div>

            {/* القسم السفلي: بطاقات الخبرات والمهارات التقنية */}
            <div className="space-y-12">
                <div className="flex justify-center mb-12">
                    <h3 className="text-3xl font-extrabold text-white relative inline-block">
                        مجالات خبرتي
                        {/* خط تجميلي تحت العنوان متوافق تماماً مع RTL */}
                        <span className="absolute -bottom-4 inset-x-0 mx-auto w-1/2 h-1 bg-blue-500 rounded-full"></span>
                    </h3>
                </div>

                {/* شبكة لعرض البطاقات بشكل متجاوب */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* بطاقة البنية التحتية والأنظمة الوهمية */}
                    <div className="p-8 bg-slate-900 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-800 flex flex-col items-center text-center group">
                        <div className="p-4 bg-slate-800/50 rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <FaServer className="text-4xl text-blue-500" />
                        </div>
                        {/* أضفنا text-slate-100 للعنوان ليكون ناصع البياض */}
                        <h4 className="text-xl font-bold mb-4 text-slate-100">الأنظمة والخوادم</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            خبرة متقدمة في إدارة الأنظمة الوهمية (<strong className="text-slate-300">Proxmox</strong> و <strong className="text-slate-300">VMware</strong>). تثبيت وإدارة أنظمة تشغيل Linux و Windows Server، وربط الخوادم بالنطاقات وإدارة البريد الإلكتروني.
                        </p>
                    </div>

                    {/* بطاقة الشبكات والاتصالات */}
                    <div className="p-8 bg-slate-900 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-800 flex flex-col items-center text-center group">
                        <div className="p-4 bg-slate-800/50 rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <FaNetworkWired className="text-4xl text-blue-500" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-100">الشبكات والأمن</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            تأسيس وإدارة الشبكات (<strong className="text-slate-300">CCNA</strong>)، ربط الفروع، برمجة السنترالات الشبكية، وتخطيط وتركيب كاميرات المراقبة السلكية واللاسلكية بأعلى معايير الأمان.
                        </p>
                    </div>

                    {/* بطاقة تطوير الويب والدعم الفني */}
                    <div className="p-8 bg-slate-900 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-800 flex flex-col items-center text-center group">
                        <div className="p-4 bg-slate-800/50 rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <FaLaptopCode className="text-4xl text-blue-500" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-100">الويب والدعم التقني</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            تصميم وبناء مواقع ويب عصرية. صيانة شاملة لأجهزة الحاسب الآلي، وخبرة قوية في المبيعات التقنية للأجهزة والملحقات.
                        </p>
                    </div>

                    {/* بطاقة الاتصال والإدارة */}
                    <div className="p-8 bg-slate-900 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border border-slate-800 flex flex-col items-center text-center group">
                        <div className="p-4 bg-slate-800/50 rounded-full mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <FaBullhorn className="text-4xl text-blue-500" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-slate-100">الإدارة والاتصال</h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            توظيف تخصصي في <strong className="text-slate-300">الاتصال الاستراتيجي</strong> لإدارة العلاقات العامة والتقنية بنجاح، وقيادة التحول الرقمي في المؤسسات لتسهيل سير العمل.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}
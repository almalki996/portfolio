// src/app/projects/page.tsx

import {
    FaServer,
    FaNetworkWired,
    FaCloud,
    FaShieldAlt,
    FaPhoneVolume,
    FaChartPie
} from 'react-icons/fa';

export default function Projects() {

    // قمنا بإزالة الهوامش (mb-4) من الأيقونات هنا لأننا سنتحكم بها في الأسفل داخل دائرة مخصصة
    const projectsData = [
        {
            id: 1,
            title: "نظام مركزي لإدارة أصول تقنية المعلومات",
            description: "تصميم ونشر بيئة سحابية آمنة تتيح المراقبة المركزية والتحكم عن بُعد بأجهزة الموظفين في الشركة، مما رفع من كفاءة الدعم الفني وقلل من وقت تعطل الأنظمة.",
            icon: <FaCloud className="text-3xl text-blue-500" />,
            tags: ["إدارة خوادم", "أتمتة", "دعم عن بُعد"]
        },
        {
            id: 2,
            title: "هندسة شبكات مؤسسية آمنة (VPN)",
            description: "ربط فروع متعددة لشركة عبر قنوات اتصال مشفرة، مع تأسيس بنية تحتية للشبكة الداخلية وتفعيل صلاحيات الوصول عن بُعد للإدارة العليا بأعلى معايير الأمان.",
            icon: <FaNetworkWired className="text-3xl text-blue-500" />,
            tags: ["هندسة شبكات", "أمن سيبراني", "VPN"]
        },
        {
            id: 3,
            title: "تخصيص ونشر أنظمة (ERP)",
            description: "استضافة وإعداد نظام متكامل لتخطيط موارد المؤسسات، شمل تخصيص واجهات المستخدم وتفعيل الوحدات المحاسبية ليتناسب مع المتطلبات التشغيلية للعميل.",
            icon: <FaServer className="text-3xl text-blue-500" />,
            tags: ["أنظمة أعمال", "ERP", "قواعد بيانات"]
        },
        {
            id: 4,
            title: "بيئة خوادم تعتمد على الحاويات (Docker)",
            description: "بناء وإدارة خوادم لينكس تستضيف خدمات متعددة ومعزولة عبر تقنية الحاويات، مما يضمن استقرار التطبيقات الداخلية وقواعد البيانات وسهولة أخذ النسخ الاحتياطية.",
            icon: <FaShieldAlt className="text-3xl text-blue-500" />,
            tags: ["Linux", "Docker", "بنية تحتية"]
        },
        {
            id: 5,
            title: "الاتصالات الموحدة وأنظمة الحضور",
            description: "برمجة سنترالات شبكية (VoIP) لربط الهواتف المؤسسية مع رسائل الرد الآلي، بالإضافة إلى دمج أجهزة البصمة البيومترية لضبط عمليات الحضور والانصراف.",
            icon: <FaPhoneVolume className="text-3xl text-blue-500" />,
            tags: ["VoIP", "أنظمة بيومترية", "Hardware"]
        },
        {
            id: 6,
            title: "تقارير استراتيجية للقطاع غير الربحي",
            description: "توظيف مهارات الاتصال الاستراتيجي في إعداد وتصميم التقرير السنوي والخطط التشغيلية، لتحويل البيانات المعقدة إلى محتوى بصري احترافي وجذاب.",
            icon: <FaChartPie className="text-3xl text-blue-500" />,
            tags: ["اتصال استراتيجي", "تصميم", "تحليل بيانات"]
        }
    ];

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">

            {/* رأس الصفحة */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    معرض <span className="text-blue-600">أعمالي ومشاريعي</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                    مجموعة من الحلول التقنية المتكاملة التي قمت بتصميمها وتنفيذها، تجمع بين استقرار البنية التحتية، أمان الشبكات، والابتكار في إدارة الأنظمة.
                </p>
            </div>

            {/* شبكة عرض المشاريع (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projectsData.map((project) => (
                    // أضفنا overflow-hidden و relative للتحكم في تأثير الخط العلوي
                    <div
                        key={project.id}
                        className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden"
                    >
                        {/* تأثير الخط العلوي الملون يظهر عند الهوفر */}
                        <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-blue-600 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        {/* عرض الأيقونة داخل دائرة متناسقة */}
                        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/50 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
                            {project.icon}
                        </div>

                        {/* عنوان المشروع (أصبح أبيض ناصعاً لتباين أفضل) */}
                        <h3 className="text-2xl font-bold text-slate-100 mb-4 leading-snug">
                            {project.title}
                        </h3>

                        {/* وصف المشروع (استخدمنا text-justify لوزن الأطراف) */}
                        <p className="text-slate-400 leading-relaxed mb-8 grow text-justify">
                            {project.description}
                        </p>

                        {/* تصنيفات المشروع (Tags) */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-slate-800 text-blue-400 border border-slate-700/50 text-sm font-semibold px-3 py-1 rounded-full group-hover:border-blue-500/30 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}
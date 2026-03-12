// src/app/contact/page.tsx

"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("تم إرسال رسالتك بنجاح!");
    };

    return (
        <section className="container mx-auto px-4 py-16 md:py-24">

            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                    دعنا <span className="text-blue-500">نتواصل</span>
                </h2>
                <p className="text-lg text-slate-400">
                    هل لديك مشروع تقني، استشارة في الشبكات، أو فكرة موقع تريد تنفيذها؟
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-800">

                {/* القسم الأيمن: معلومات التواصل */}
                <div className="lg:col-span-5 bg-slate-950 text-white p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

                    <h3 className="text-2xl font-bold mb-8 relative z-10 text-slate-100">معلومات التواصل</h3>

                    <div className="space-y-8 relative z-10">
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-2xl text-blue-500 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-slate-200">البريد الإلكتروني</h4>
                                <p className="text-slate-400 mt-1">az.almalki.1996@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-2xl text-blue-500 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-slate-200">رقم الجوال</h4>
                                <p className="text-slate-400 mt-1" dir="ltr">+966 59 300 8572</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-2xl text-blue-500 mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg text-slate-200">الموقع</h4>
                                <p className="text-slate-400 mt-1">المملكة العربية السعودية-خميس مشيط</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* القسم الأيسر: نموذج المراسلة بخانات احترافية */}
                <div className="lg:col-span-7 p-10">
                    <form onSubmit={handleSubmit} className="space-y-8 mt-4">

                        {/* حقل الاسم مع تأثير Floating Label */}
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="block px-4 pb-2.5 pt-4 w-full text-base text-white bg-transparent rounded-lg border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-base text-slate-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-right bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 inset-s-3 pointer-events-none"
                            >
                                الاسم الكريم
                            </label>
                        </div>

                        {/* حقل البريد الإلكتروني مع تأثير Floating Label */}
                        <div className="relative">
                            <input
                                type="email"
                                dir="ltr"
                                id="email"
                                className="block px-4 pb-2.5 pt-4 w-full text-base text-white bg-transparent rounded-lg border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-base text-slate-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-right bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 inset-s-3 pointer-events-none"
                            >
                                البريد الإلكتروني
                            </label>
                        </div>

                        {/* حقل الرسالة مع تأثير Floating Label */}
                        <div className="relative">
                            <textarea
                                id="message"
                                rows={5}
                                className="block px-4 pb-2.5 pt-4 w-full text-base text-white bg-transparent rounded-lg border-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer resize-none"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-base text-slate-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-right bg-slate-900 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:top-0 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 inset-s-3 pointer-events-none"
                            >
                                كيف يمكنني مساعدتك؟
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            إرسال الرسالة
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}
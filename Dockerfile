# استخدام نسخة Node.js الرسمية المخصصة للاستخدام في بيئة الإنتاج
FROM node:18-alpine AS base

# إعداد دليل العمل
WORKDIR /app

# نسخ ملفات تعريف الحزم
COPY package.json pnpm-lock.yaml* ./

# تثبيت pnpm
RUN npm install -g pnpm

# تثبيت الاعتماديات
RUN pnpm install --frozen-lockfile

# نسخ بقية ملفات المشروع
COPY . .

# بناء المشروع لبيئة الإنتاج
RUN pnpm build

# فتح البورت 3000 (البورت الداخلي للحاوية)
EXPOSE 3000

# تشغيل المشروع
CMD ["pnpm", "start"]
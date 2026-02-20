import React from "react";

export default function AnimationBg({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    // نستخدم relative هنا ونشيل flex عشان المحتوى ياخد راحته
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* glowing blobs animated */}
      <div className="absolute w-[900px] h-[900px] bg-purple-700/20 blur-[220px] rounded-full -top-[250px] -left-[250px] animate-[floatSlow_18s_ease-in-out_infinite]" />

      <div className="absolute w-[700px] h-[700px] bg-fuchsia-600/20 blur-[180px] rounded-full -bottom-[200px] -right-[200px] animate-[floatSlow2_22s_ease-in-out_infinite]" />
      {/* 1. الطبقة السفلية: الخلفية السوداء الثابتة */}
      <div className="absolute inset-0 bg-[#07010f] -z-30" />

      {/* 2. الطبقة المتوسطة: الأنميشن والـ Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {/* Glowing Blobs */}
        <div className="absolute w-[700px] h-[700px] bg-fuchsia-600/20 blur-[180px] rounded-full -bottom-[200px] -right-[200px] animate-[floatSlow2_22s_ease-in-out_infinite]" />

        {/* Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: "-10px",
                animation: `particles ${8 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. الطبقة العلوية: المحتوى الخاص بك */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

'use client';
import { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";

export default function Cookie() {
  const [mounted, setMounted] = useState(false);//after app load only content shld be displayed
  const [isOpen, setIsOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Expose open function globally for Footer
    (window as any).openCookieSettings = () => {
      setIsOpen(false); 
      setIsModelOpen(true);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) nav.style.display = isModelOpen ? 'none' : 'block';
  }, [isModelOpen]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed right-10 bottom-10 z-[10001] cursor-pointer">
        {!isOpen && !isModelOpen && (
          <button onClick={() => setIsOpen(true)} className="transition-transform active:scale-95 duration-200 cursor-pointer">
            <Image src="/cookie.svg" alt="Cookie" width={56} height={56} />
          </button>
        )}
        
        {isOpen && (
          <div className="rounded-2xl bg-white dark:bg-[#0B1121] border border-gray-200 dark:border-white/10 p-4 flex flex-col md:flex-row md:items-center justify-between shadow-2xl w-full md:min-w-[580px] animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-3">
              <Image src="/cookie.svg" alt="Cookie" width={32} height={32} />
              <p className="text-gray-600 dark:text-slate-400 text-[13px] font-medium leading-relaxed max-w-[360px]">
                We use third-party cookies to provide you the best user experience and for analytics.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4 md:mt-0">
              <button
                onClick={() => { setIsOpen(false); setIsModelOpen(false); }}
                className="bg-[#2323FF] text-white px-5 py-2 rounded-xl text-[13px] font-bold active:scale-95 cursor-pointer"
              >
                Accept
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border border-gray-200 dark:border-white/10 rounded-xl w-9 h-9 flex items-center justify-center text-gray-400 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {isModelOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-[540px] bg-white dark:bg-[#06080E] rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-white/5">
            <div className="flex items-center justify-between px-8 py-6">
              <h2 className="text-[19px] font-bold text-[#1E293B] dark:text-white">Cookies Settings</h2>
              <button 
                onClick={() => setIsModelOpen(false)} 
                className="text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            <div className="px-8 space-y-3 mb-6 max-h-[50vh] overflow-y-auto custom-scrollbar pr-2">
              <CookieSettingItem title="Essential" isLocked description="Required to enable basic website functionality. You may not disable essential cookies." />
              <CookieSettingItem title="Targeted Advertising" defaultEnabled description="Used to deliver relevant ads to you and track conversion." />
              <CookieSettingItem title="Personalisation" description="Allows the site to remember choices you make (such as language)." />
              <CookieSettingItem title="Analytics" defaultEnabled description="Help us understand how visitors interact with our site." />
            </div>

            <div className="flex items-center justify-between px-8 py-6 border-t border-gray-50 dark:border-white/5 bg-gray-50/30 dark:bg-white/5">
              <button className="text-[13px] font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer">
                Cookies Policy
              </button>
              <button
                onClick={() => setIsModelOpen(false)}
                className="bg-[#2323FF] text-white px-8 py-2.5 rounded-xl text-[14px] font-black tracking-tight active:scale-95 transition-all shadow-md shadow-blue-600/20 cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CookieSettingItem({ title, description, isLocked = false, defaultEnabled = false }: { title: string, description?: string, isLocked?: boolean, defaultEnabled?: boolean }) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled || isLocked);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#F0F4F8] dark:bg-[#0B1121] rounded-[20px] overflow-hidden transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10">
      <div className="px-6 py-4 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-4">
          <ChevronDown size={14} className={text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}} strokeWidth={3} />
          <span className="text-[14px] font-black text-[#1E293B] dark:text-slate-100 tracking-tight">{title}</span>
        </div>
        <label className={relative inline-flex items-center ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}} onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={() => !isLocked && setIsEnabled(!isEnabled)}
            disabled={isLocked}
          />
          <div className="w-[42px] h-[22px] bg-gray-300 dark:bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:left-[4px] after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-[#2323FF]"></div>
        </label>
      </div>
      {isExpanded && description && (
        <div className="px-16 pb-4 -mt-1 animate-in slide-in-from-top-1 duration-200">
          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{description}</p>
        </div>
      )}
    </div>
  );
}
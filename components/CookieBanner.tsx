"use client";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function CookieBanner() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isModelOpen, setIsModelOpen] = useState<boolean>(false);

    // Added to connect with the footer link
    useEffect(() => {
        const handleOpen = () => setIsModelOpen(true);
        window.addEventListener("openCookieBanner", handleOpen);
        return () => window.removeEventListener("openCookieBanner", handleOpen);
    }, []);

    return (
        <>
            <section className="fixed bottom-[20px] right-[16px] left-[16px] mobile-md:max-md:right-[20px] mobile-md:max-md:left-[20px] md:bottom-[40px] md:right-[44px] md:left-auto z-[10001] cursor-pointer  md:w-fit">
                {!isOpen ? (
                    <div className="flex justify-end md:block">
                        <button onClick={() => setIsOpen(true)}>
                            <Image src="/cookie-icon.svg" alt="Cookie" width={46} height={46} className=" md:w-[56px] md:h-[56px]" />
                        </button>
                    </div>
                ) : (
                    <div className="rounded-[8px] bg-[#F7F8FA] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-[20px] md:p-[20px] flex flex-col md:flex-row md:items-center md:justify-between shadow-[0_10px_40px_rgba(0,0,0,0.1)] w-full min-w-0 md:min-w-[596px]">
                        <div className="flex items-start md:items-center mb-[16px] md:mb-0 mobile-md:max-md:items-center mobile-md:max-md:mb-[12px]">
                            <Image src="/cookie-icon.svg" alt="Cookie" width={36} height={36} className="mt-[4px] md:mt-0 flex-shrink-0 mobile-md:max-md:w-[32px] mobile-md:max-md:h-[32px]" />
                            <p className="text-[#6B7280] dark:text-zinc-400 ml-[12px] max-w-full md:max-w-[400px] text-[13.5px] font-[600] leading-[20px] mobile-md:max-md:text-[12px] mobile-md:max-md:leading-[18px]">
                                We use third-party cookies to provide you the best user experience and for performance analytics.
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <button
                                onClick={() => {
                                    localStorage.setItem("cookie-consent", "true");
                                    setIsOpen(false);
                                }}
                                className="text-white mr-[12px] bg-[#2563EB] px-[20px] py-[8px] rounded-[8px] text-[14px] font-[600] leading-[20px] hover:bg-[#1D4ED8] transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                className="border border-zinc-200 dark:border-zinc-700 bg-transparent text-[#6B7280] rounded-[8px] p-[8px] cursor-pointer flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={20} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                )}
            </section>

            {isModelOpen && (
                <div className="fixed inset-0 z-[10002] bg-white md:bg-black/60 md:backdrop-blur-sm md:flex md:items-center md:justify-center p-0 md:p-4 cursor-default overflow-y-auto md:overflow-hidden">
                    <div className="w-full h-full md:h-auto md:max-w-[630px] bg-white dark:bg-zinc-950 rounded-0 md:rounded-[24px] flex flex-col shadow-none md:shadow-[0_4px_32px_rgba(0,0,0,0.1)] animate-fade-in-up">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 p-[20px] mobile-md:max-md:px-[16px] mobile-md:max-md:py-[16px] mobile-md:max-md:border-none xs:max-mobile-md:px-[16px] xs:max-mobile-md:py-[16px] xs:max-mobile-md:border-none">
                            <div className="block md:hidden">
                                <span className="font-[600] tracking-tight leading-none text-black dark:text-white text-[28px] mobile-md:max-md:leading-[40px] xs:max-mobile-md:leading-[40px]">
                                    COIN<span className="text-[#2563EB]">99</span>
                                </span>
                            </div>
                            <h2 className="hidden md:block text-[20px] font-[600] leading-[28px] text-black dark:text-white">Cookies Settings</h2>
                            <button onClick={() => setIsModelOpen(false)} className="text-black dark:text-white mobile-md:max-md:pl-[10px] mobile-md:max-md:pt-[1px] mobile-md:max-md:pb-[6px] mobile-md:max-md:pr-[6px] xs:max-mobile-md:pl-[10px] xs:max-mobile-md:pt-[1px] xs:max-mobile-md:pb-[6px] xs:max-mobile-md:pr-[6px]">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 px-[20px] overflow-y-auto custom-scrollbar mt-[16px] md:mt-[24px] mobile-md:max-md:mt-[31px] xs:max-mobile-md:mt-[31px]">
                            <CookieSettingItem
                                title="Essential"
                                description="Required to enable basic website functionality. You may not disable essential cookies."
                                isLocked={true}
                                defaultEnabled={true}
                            />
                            <CookieSettingItem title="Targeted Advertising" description="Required to enable basic website functionality. You may not disable essential cookies." defaultEnabled={true} />
                            <CookieSettingItem title="Personalisation" description="Required to enable basic website functionality. You may not disable essential cookies." />
                            <CookieSettingItem title="Analytics" description="Required to enable basic website functionality. You may not disable essential cookies." defaultEnabled={true} />
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 mt-auto p-[20px] mobile-md:max-md:p-0 mobile-md:max-md:border-none xs:max-mobile-md:p-0 xs:max-mobile-md:border-none">
                            <button className="hidden md:block text-[14px] font-[400] leading-[20px] text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                                Cookies Policy
                            </button>
                            <div className="flex justify-end w-full md:w-auto mobile-md:max-md:mr-[16px] xs:max-mobile-md:mr-[16px]">
                                <button
                                    onClick={() => { setIsModelOpen(false); setIsOpen(false); }}
                                    className="px-[24px] md:px-[10px] py-[10px] md:py-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-[600] md:font-[500] leading-[20px] rounded-[8px] transition-all mobile-md:max-md:rounded-[10px] mobile-md:max-md:text-[14px] mobile-md:max-md:leading-[20px] mobile-md:max-md:px-[12px] mobile-md:max-md:py-[10px] xs:max-mobile-md:rounded-[10px] xs:max-mobile-md:text-[14px] xs:max-mobile-md:leading-[20px] xs:max-mobile-md:px-[12px] xs:max-mobile-md:py-[10px]"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function CookieSettingItem({ title, description, isLocked = false, defaultEnabled = false }: { title: string, description?: string, isLocked?: boolean, defaultEnabled?: boolean }) {
    const [isExpanded, setIsExpanded] = useState(isLocked);
    const [isEnabled, setIsEnabled] = useState(defaultEnabled);

    return (
        <div className="bg-[#F4F5F7] dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-[12px] rounded-[16px] overflow-hidden mb-[16px] mobile-md:max-md:bg-transparent mobile-md:max-md:p-0 mobile-md:max-md:rounded-none mobile-md:max-md:mb-[24px] xs:max-mobile-md:bg-transparent xs:max-mobile-md:p-0 xs:max-mobile-md:rounded-none xs:max-mobile-md:mb-[24px]">
            <div className="flex items-start justify-between">
                <div className="flex items-start flex-col w-full" onClick={() => !isLocked && setIsExpanded(!isExpanded)}>
                    <div className="flex items-center w-full">
                        <button className="hidden md:block mr-[12px] text-zinc-500 transition-transform duration-200 mt-[2px]" style={{ transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                            <ChevronDown size={20} />
                        </button>
                        <div className="flex items-center justify-between w-full">
                            <span className="text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] font-[600] text-black dark:text-white mobile-md:max-md:text-[20px] mobile-md:max-md:leading-[28px] xs:max-mobile-md:text-[20px] xs:max-mobile-md:leading-[28px]">{title}</span>
                            <label className={`relative inline-flex items-center ${isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}>
                                <input
                                    type="checkbox"
                                    className="sr-only peer flex items-center"
                                    checked={isEnabled}
                                    onChange={() => !isLocked && setIsEnabled(!isEnabled)}
                                    disabled={isLocked}
                                />
                                <div className="flex items-center w-[40px] md:w-[36px] h-[22px] md:h-[20px] bg-gray-200 dark:bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-[18px] md:after:h-[16px] after:w-[18px] md:after:w-[16px] after:transition-all peer-checked:bg-[#2563EB] dark:peer-checked:bg-[#2563EB]"></div>
                            </label>
                        </div>
                    </div>
                    <div className="md:hidden mt-[4px] mobile-md:max-md:mt-[14px] xs:max-mobile-md:mt-[14px] ">
                        <p className="text-[12px] leading-[18px] text-zinc-500 mobile-md:max-md:text-[14px] mobile-md:max-md:leading-[20px] xs:max-mobile-md:text-[14px] xs:max-mobile-md:leading-[20px]">{description}</p>
                    </div>
                </div>

            </div>
            {/* Desktop expansion */}
            <div className={`hidden md:block transition-all duration-200 overflow-hidden ${isExpanded ? 'max-h-[200px] mt-[8px]' : 'max-h-0'}`}>
                {description && (
                    <div className="pl-[30px] pb-0">
                        <p className="text-[12px] leading-[18px] text-zinc-500">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

import React from "react";
import Image from "next/image"; // Next.js 프로젝트에서 이미지를 다룰 때 사용합니다.
import Menu from "./Menu";

const Header = () => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: "var(--header-position)" as React.CSSProperties["position"],
        }}
      >
        <div
          className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style={{
            position:
              "var(--header-inner-position)" as React.CSSProperties["position"],
          }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                        id="headlessui-popover-button-:R2miqla:"
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: "0",
                        padding: "0",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        display: "none",
                      }}
                    ></div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <Menu />
                        {/**
                        <li>
                          <a
                            className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400"
                            href="/submain"
                          >
                            submain
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/test/sub"
                          >
                            sub
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/speaking"
                          >
                            Speaking
                          </a>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/uses"
                          >
                            Uses
                          </a>
                        </li>
                         */}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Switch to dark theme"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                      >
                        login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 너무 길어지므로 이후 부분은 생략합니다. 필요한 부분을 추가해 주세요. */}
    </header>
  );
};

export default Header;
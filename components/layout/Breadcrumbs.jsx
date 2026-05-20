import React from "react";

export default function Breadcrumbs({ pagename }) {
  return (
    <div>
      <div className="py-20 text-center space-y-3 bg-gradient-to-b from-sky-50/50 to-white border-b border-gray-100/50">
        <h1 className="text-4xl font-serif font-bold uppercase tracking-wider text-[#1e2e4d] sm:text-5xl">
          {pagename}
        </h1>

        <p className="text-xs tracking-wider text-gray-400 font-semibold uppercase">
          Home &gt; Services &gt;{" "}
          <span className="text-[#0ea5e9]"> {pagename}</span>
        </p>
      </div>
    </div>
  );
}

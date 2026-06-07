import React from "react";

const SectionHeader = ({ eyebrow, title, desc, action }) => {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {desc && <p className="mt-2 max-w-2xl text-sm text-slate-500">{desc}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
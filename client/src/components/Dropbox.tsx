import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-xl justify-between w-full text-white"
      >
        <span className='cursor-pointer'>{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="mt-4 text-sm text-gray-300 mx-6 ">{children}</div>}
    </div>
  );
};

export default Dropdown;

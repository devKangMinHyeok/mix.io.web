import { ReactNode, useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const FooterLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      <footer className="p-4 text-center fixed bottom-0 left-0 w-full">
        <div className="flex justify-center">
          <Link href="/">
            <FaHome size={30} className={"text-grey-600 opacity-50"} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterLayout;

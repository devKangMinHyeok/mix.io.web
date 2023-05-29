import { ReactNode } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      {/* <footer className="bg-gray-200 p-4 text-center fixed bottom-0 left-0 w-full">
        <div className="flex justify-center">
          <Link href="/">
            <FaHome size={30} className="text-gray-600 opacity-80" />
          </Link>
        </div>
      </footer> */}
    </div>
  );
};

export default Layout;

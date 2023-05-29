import { ReactNode } from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const BackRouterLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <button
          type="button"
          onClick={() => router.back()}
          style={{ margin: "1rem" }}
        >
          <FaArrowLeft className="mr-2" />
        </button>
        {children}
      </main>
    </div>
  );
};

export default BackRouterLayout;

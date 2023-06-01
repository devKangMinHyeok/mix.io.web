import {ReactNode} from "react";
import {useRouter} from "next/router";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

interface RouterLayoutProps {
  children: ReactNode;
  handler?: () => void; // optional handler prop
}

const RouterLayout = ({children, handler}: RouterLayoutProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <button
          type="button"
          onClick={() => router.back()}
          style={{margin: "1rem"}}
        >
          <FaArrowLeft className="mr-2" />
          Prev
        </button>
        {handler && (
          <button
            type="button"
            onClick={() => handler()}
            style={{margin: "1rem"}}
          >
            <FaArrowRight className="ml-2" />
            Next
          </button>
        )}
        {children}
      </main>
    </div>
  );
};

export default RouterLayout;

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
        <div className="flex justify-between">
          <button
            className="flex flex-row items-center"
            type="button"
            onClick={() => router.back()}
            style={{margin: "1rem", fontSize: "36px"}}
          >
            <FaArrowLeft className="mr-2" />
            Prev
          </button>
          {handler && (
            <button
              className="flex flex-row items-center"
              type="button"
              onClick={() => handler()}
              style={{margin: "1rem", fontSize: "36px"}}
            >
              Next
              <FaArrowRight className="ml-2" />
            </button>
          )}
        </div>
        {children}
      </main>
    </div>
  );
};

export default RouterLayout;

import {useRouter} from "next/router";

const Pour = () => {
  const router = useRouter();
  const height: number = parseInt(router.query.height as string);
  return (
    <div className="flex flex-col items-center">
      <div
        className="z-0 absolute left-1/2 top-1/2"
        style={{
          transform: "translate(-50%,-50%)",
          fontWeight: 300,
          fontSize: "48px",
          lineHeight: "55px",
        }}
      >
        <div
          className="flex items-center justify-center border-b-2 border-t-2 border-dashed border-black"
          style={{
            height: height / 3,
            backgroundColor: "rgba(255, 113, 113, 0.2)",
            width: "100vw",
          }}
        >
          jin
        </div>
        <div
          className="flex items-center justify-center border-b-2  border-dashed border-black"
          style={{
            height: height / 3,
            backgroundColor: "rgba(0, 240, 255, 0.2)",
            width: "100vw",
          }}
        >
          water
        </div>
        <div
          className="flex items-center justify-center border-b-2  border-dashed border-black"
          style={{
            height: height / 3,
            backgroundColor: "rgba(219, 255, 202, 0.2)",
            width: "100vw",
          }}
        >
          melon
        </div>
      </div>
    </div>
  );
};

export default Pour;

import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassHeight from "@components/glass/SetGlassHeight";
import {useRouter} from "next/router";
import {useState} from "react";
import SetVolume from "@components/making/SetVolume";

const MakingPage = () => {
  const router = useRouter();
  const [height, setHeight] = useState<number | undefined>(200);
  const handleNextPage = () => {
    router.push({
      pathname: "/making/pour",
      query: {...router.query, height: height},
    });
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetVolume height={height} setHeight={setHeight} />
      </RouterLayout>
    </div>
  );
};

export default MakingPage;

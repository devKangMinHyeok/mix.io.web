import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassHeight from "@components/glass/SetGlassHeight";
import {useRouter} from "next/router";
import {useState} from "react";
import SetVolume from "@components/making/SetVolume";

const MakingPage = () => {
  const router = useRouter();
  const [{y, h}, setHeight] = useState<{y: number; h: number}>({
    y: Number(router.query.y),
    h: Number(router.query.h),
  });
  const handleNextPage = () => {
    router.push({
      pathname: "/making/pour",
      query: {
        ...router.query,
        y: Math.floor(y / 10) * 10,
        h: Math.floor(h / 10) * 10,
      },
    });
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetVolume height={{y, h}} setHeight={setHeight} />
      </RouterLayout>
    </div>
  );
};

export default MakingPage;

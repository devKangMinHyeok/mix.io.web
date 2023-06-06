import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassHeight from "@components/glass/SetGlassHeight";
import {useRouter} from "next/router";
import {useState} from "react";

const SetGlassHeightPage = () => {
  const [{y, h}, setHeight] = useState<{y: number; h: number}>({
    y: 200,
    h: 400,
  });
  const router = useRouter();
  const handleNextPage = () => {
    router.push({
      pathname: "/making",
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
        <SetGlassHeight height={{y, h}} setHeight={setHeight} />
      </RouterLayout>
    </div>
  );
};

export default SetGlassHeightPage;

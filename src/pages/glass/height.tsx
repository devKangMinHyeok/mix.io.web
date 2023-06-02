import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassHeight from "@components/glass/SetGlassHeight";
import {useRouter} from "next/router";
import {useState} from "react";

const SetGlassHeightPage = () => {
  const [height, setHeight] = useState<number | undefined>(200);
  const router = useRouter();
  const handleNextPage = () => {
    router.push({
      pathname: "/making",
      query: {...router.query, height: height},
    });
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetGlassHeight height={height} setHeight={setHeight} />
      </RouterLayout>
    </div>
  );
};

export default SetGlassHeightPage;

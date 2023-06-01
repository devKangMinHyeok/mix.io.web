import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassSize from "@components/glass/SetGlassSize";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const SetGlassSizePage = () => {
  const [radius, setRadius] = useState<number | undefined>(200);
  const router = useRouter();

  const handleNextPage = () => {
    router.push(
      {
        pathname: "/glass/height",
        query: {...router.query, radius: radius},
      },
      {
        pathname: "/glass/new",
        query: {...router.query, radius: radius},
      }
    );
  };

  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetGlassSize radius={radius} setRadius={setRadius} />
      </RouterLayout>
    </div>
  );
};

export default SetGlassSizePage;

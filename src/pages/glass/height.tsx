import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassHeight from "@components/glass/SetGlassHeight";
import {useRouter} from "next/router";

const SetGlassHeightPage = () => {
  const router = useRouter();
  const handleNextPage = () => {
    router.push(
      {
        pathname: "/glass/height",
        query: {...router.query},
      },
      {
        pathname: "/glass/new",
        query: {...router.query},
      }
    );
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetGlassHeight />
      </RouterLayout>
    </div>
  );
};

export default SetGlassHeightPage;

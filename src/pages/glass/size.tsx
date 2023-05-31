import RouterLayout from "@components/Layouts/RouterLayout";
import SetGlassSize from "@components/glass/SetGlassSize";
import {useRouter} from "next/router";

const SetGlassSizePage = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/glass/height"); // /glass/height 페이지로 이동
  };

  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <SetGlassSize />
      </RouterLayout>
    </div>
  );
};

export default SetGlassSizePage;

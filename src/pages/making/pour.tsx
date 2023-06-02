import RouterLayout from "@components/Layouts/RouterLayout";
import Pour from "@components/making/Pour";
import {useRouter} from "next/router";

const PourPage = () => {
  const router = useRouter();
  const handleNextPage = () => {
    router.push({
      pathname: "/making/complete",
    });
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <Pour />
      </RouterLayout>
    </div>
  );
};

export default PourPage;

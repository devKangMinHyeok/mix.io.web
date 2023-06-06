import RouterLayout from "@components/Layouts/RouterLayout";
import Pour from "@components/making/Pour";
import { sampleMenus } from "@src/constants";
import Image from "next/image";
import { useRouter } from "next/router";

const PourPage = () => {
  const router = useRouter();
  const handleNextPage = () => {
    router.push({
      pathname: "/",
    });
  };
  return (
    <div>
      <RouterLayout handler={handleNextPage}>
        <div className="grid h-screen place-items-center">
          <div>
            <Image src={sampleMenus[0].image} alt="" width={50} height={50} />
            <div>Mojito</div>
          </div>
        </div>
      </RouterLayout>
    </div>
  );
};

export default PourPage;

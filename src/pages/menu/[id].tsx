import { useRouter } from "next/router";
import { sampleMenus } from "@src/constants";
import Detail from "@components/detail/Detail";
import BackRouterLayout from "@components/Layouts/BackRouterLayout";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const menuId = parseInt(id as string);

  if (isNaN(menuId)) {
    return <div>유효한 메뉴 ID가 아닙니다.</div>;
  }

  return (
    <div>
      <BackRouterLayout>
        <Detail info={sampleMenus[menuId - 1]} />
      </BackRouterLayout>
    </div>
  );
};

export default DetailPage;

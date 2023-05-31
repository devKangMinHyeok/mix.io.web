import {useRouter} from "next/router";
import {sampleMenus} from "@src/constants";
import Detail from "@components/detail/Detail";
import RouterLayout from "@components/Layouts/RouterLayout";

const DetailPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const menuId = parseInt(id as string);

  if (isNaN(menuId)) {
    return <div>유효한 메뉴 ID가 아닙니다.</div>;
  }

  return (
    <div>
      <RouterLayout>
        <Detail info={sampleMenus[menuId - 1]} />
      </RouterLayout>
    </div>
  );
};

export default DetailPage;

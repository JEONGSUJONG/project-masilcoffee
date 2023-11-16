import React from "react";
import * as Menus from "./Style_Menu";
import MenuSelect from "../../../components/ui/adminMenu/MenuSelect";
import AdminSidebar from "../../../components/layout/AdminSidebar";
import MenuButtons from "../../../components/ui/adminMenu/MenuButtons";
import Table from "../../../components/ui/table/Table";

const AdminMenu = ({ trData, tdData }) => {
  const options = ["전체 메뉴", "에스프레소", "논커피", "스무디", "티", "에이드"];

  const handleTdClick = (data) => {
    // 클릭된 데이터에 따라 모달을 열도록 로직 작성
    console.log("Clicked:", data);
    // 모달을 열거나 상태를 변경하는 등의 로직 수행
  };

  return (
    <>
      {/* header */}
      <Menus.Container>
        <AdminSidebar />
        <Menus.Content>
          <Menus.TopBox>
            <MenuSelect options={options} />
            <Menus.ButtonWrapper>
              <MenuButtons name="optionAndNewMenu" title="옵션 정보 수정" />
              <MenuButtons name="optionAndNewMenu" title="메뉴 추가" />
            </Menus.ButtonWrapper>
          </Menus.TopBox>
          <Table trData={trData} tdData={tdData} isButtons={true} onTdClick={handleTdClick} />
        </Menus.Content>
      </Menus.Container>
      {/* footer */}
    </>
  );
};

AdminMenu.defaultProps = {
  trData: ["이미지", "종류", "이름", "사이즈", "ICE/HOT", "가격"],
  tdData: [
    ["이미지", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["이미지", "에이드", "레몬 에이드", "tall", "ICE", "6,300원"],
    ["이미지", "에이드", "체리 에이드", "tall", "ICE", "6,300원"],
    ["이미지", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["이미지", "에이드", "레몬 에이드", "tall", "ICE", "6,300원"],
    ["이미지", "에이드", "체리 에이드", "tall", "ICE", "6,300원"],
    ["이미지", "에이드", "체리 에이드", "tall", "ICE", "6,300원"],
  ],
};

export default AdminMenu;

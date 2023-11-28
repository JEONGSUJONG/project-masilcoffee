import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button/Button";
import SquareButton from "../../components/ui/button/SquareButton";
import {
  StyledPayment,
  StyledPaymentcontainer,
  StyledAction,
  StyledPaymentActionBox,
  StyledPaymentBox,
  StyledInfoBox,
  StyledInfo,
  StyledInputBox,
  StyledInfoContainer,
  StyledActionBg,
} from "./Payment.style";
import { useDispatch, useSelector } from "react-redux";

import { addRequestDeliveryAction } from "../../redux/action/paymentAction";
import { postPayment } from "../../api/payment/payment";

const Payment = () => {
  const token = useSelector((state) => state.login.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 수령 방법을 관리하는 상태
  const [delivery, setDelivery] = useState("");
  const orderRequest = useRef(null);

  // 수령 방법 버튼 클릭 핸들러
  const handleDeliveryClick = (method) => {
    setDelivery(method);
  };

  const nickname = useSelector((state) => state.user.nickname);
  const phone = useSelector((state) => state.user.phone);
  const paymentInfo = useSelector((state) => state.payment);

  const createOrderBody = () => {
    let totalOrder = {
      orderDetail: [],
      status: "주문완료",
      nickname,
      totalPrice: 0, //모든주문에 대한 총 가격
      request: orderRequest.current.value,
      packagingOption: delivery,
    };

    // orderDetail = [{name(메뉴 이름), options(옵션 문자열), price(개별가격)}]

    paymentInfo.orders.forEach((order) => {
      // 개별 주문 확인 {name, totalPrice(개별가격), id, orderId, shot, syrups ...}
      const selectedOption = [];
      for (const optionName in order) {
        let details = "";
        // Array.isArray(order[optionName]) &&
        // ["바닐라 1", "카라멜 2"].join(" ") => 바닐라 1 카라멜 2
        switch (optionName) {
          case optionName === "shot":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name} ${detail.quantity}`)
              .join(" ");
            selectedOption.push(`샷: ${details}`); // "샷: 에스프레소 1"
            break;
          case optionName === "syrups":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name} ${detail.quantity}`)
              .join(" ");
            selectedOption.push(`시럽: ${details}`); // "시럽: 바닐라 1 카라멜 2"
            break;
          case optionName === "whipping":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name}`)
              .join(" ");
            selectedOption.push(`휘핑: ${details}`); // "휘핑: 적게 1"
            break;
          case optionName === "ice":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name}`)
              .join(" ");
            selectedOption.push(`얼음: ${details}`);
            break;
          case optionName === "drizzle":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name}`)
              .join(" ");
            selectedOption.push(`드리즐: ${details}`);
            break;
          case optionName === "milk":
            details = order[optionName]
              .filter((detail) => detail.quantity > 0)
              .map((detail) => `${detail.name}`)
              .join(" ");
            selectedOption.push(`우유: ${details}`);
            break;
          default:
            break;
        }
      }
      const currentOption = {
        name: order.name,
        options: selectedOption.join(" / "),
        price: order.totalPrice,
      };
      totalOrder.orderDetail = [...totalOrder.orderDetail, currentOption];
      totalOrder.totalPrice += order.totalPrice;
    });

    return totalOrder;
  };

  const handleOnClickToPayment = async () => {
    // confirm 대화상자를 표시하고, 사용자의 응답을 확인
    const isConfirmed = window.confirm("정말 결제 하시겠습니까?");

    // 사용자가 '확인'을 누른 경우, PaymentDone 페이지로 이동
    if (isConfirmed) {
      try {
        await postPayment(createOrderBody(), token);
        console.log("결제 성공");
        dispatch(
          addRequestDeliveryAction(orderRequest.current.value, delivery)
        );
        navigate("/PaymentDone");
      } catch (error) {
        alert("결제에 실패하였습니다. 다시 시도 해 주세요.");
        console.log(error.message);
      }
    }
  };

  return (
    <StyledPaymentcontainer>
      <StyledPaymentBox>
        <StyledPaymentActionBox>
          <StyledAction>
            <StyledActionBg>
              <span>STEP1</span>
              <b>주문결제</b>
            </StyledActionBg>
          </StyledAction>
          <span>.....</span>
          <StyledAction>
            <div>
              <span>STEP2</span>
              <b>결제완료</b>
            </div>
          </StyledAction>
        </StyledPaymentActionBox>
        <StyledPayment>
          <StyledInfoContainer>
            <StyledInfoBox>
              <h2>주문자 정보</h2>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령인</h3>
                  <input type="text" value={nickname} readOnly={true} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>수령방법</h3>
                  <SquareButton
                    text={"방문포장"}
                    type={delivery === "방문포장" ? "red" : "grey"}
                    onClick={() => handleDeliveryClick("방문포장")}
                  />
                  <SquareButton
                    text={"매장식사"}
                    type={delivery === "매장식사" ? "red" : "grey"}
                    onClick={() => handleDeliveryClick("매장식사")}
                  />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>전화번호</h3>
                  <input type="text" value={phone} readOnly={true} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>주문 요청사항</h3>
                  <input
                    type="text"
                    placeholder="주문 시 요청사항을 입력하세요"
                    ref={orderRequest}
                  />
                  <SquareButton text={"확인"} type={"red"} />
                </StyledInputBox>
              </StyledInfo>
              <StyledInfo>
                <StyledInputBox>
                  <h3>결제수단</h3>
                  <SquareButton text={"신용카드"} type={"red"} />
                </StyledInputBox>
              </StyledInfo>
            </StyledInfoBox>
            <Button
              onClick={handleOnClickToPayment}
              text={"결제하기"}
              type={"red"}
            />
          </StyledInfoContainer>
        </StyledPayment>
      </StyledPaymentBox>
    </StyledPaymentcontainer>
  );
};

export default Payment;

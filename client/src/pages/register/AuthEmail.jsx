import React, { useState } from "react";
import { authEmail, authComplete } from "../../api/register/axiosRegister";
import { useDispatch } from "react-redux";

import Modal from "../../components/ui/modal/Modal";
import Button from "../../components/ui/button/SquareButton";

import { getAuthEmail } from "../../redux/action/register/register";
import { AuthItems, AuthTitle, AuthInput, AuthForm } from "./AuthEmail.style";

function AuthEmail(props) {
  const [email, setEmail] = useState("");
  const [num, setNum] = useState(null);
  const dispatch = useDispatch()

  const emailfn = async (email) => {
    try {
      const res = await authEmail(email);
      return res;
    } catch (err) {
      alert("없는 이메일 입니다.");
    }
  };

  const numfn = async (email, code) => {
    try {
      const res = await authComplete(email, code);
      const confirm = window.confirm(res.message)

      if (confirm) {
        dispatch(getAuthEmail(email))
      }
    } catch (err) {
      console.error(err)
    }
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangeNum = (event) => {
    const value = event.target.value;
    setNum(value);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    emailfn(email);
  };

  const submitNum = (e) => {
    e.preventDefault();
    numfn(email, num);

   
  };

  return (
    <Modal onClose={props.onClose}>
      <AuthItems>
        <AuthTitle>이메일 인증</AuthTitle>
        <AuthForm onSubmit={submitEmail}>
          <AuthInput type="text" value={email} onChange={handleChangeEmail} placeholder="abcd@efg.com"/>
          <Button type="red" text="전송"/>
        </AuthForm>
        <AuthForm onSubmit={submitNum}>
          <AuthInput type="number" value={num} onChange={handleChangeNum} placeholder="00000"/>
          <Button type="red" text="인증"/>
        </AuthForm>
        <Button onClick={props.onClose} text="나가기"/>
      </AuthItems>
    </Modal>
  );
}

export default AuthEmail;

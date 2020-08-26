import React, { useState } from "react";
import styled from "styled-components";

interface SlideProps {
  readonly isLogin: boolean;
}
const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Slide = styled.div<SlideProps>`
  color: white;
  position: absolute;
  top: 0;
  left: ${(SlideProps) => (SlideProps.isLogin ? "0" : " 50vw")};
  width: 50vw;
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1494481524892-b1bf38423fd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
  background-attachment: fixed;
  background-size: 100vw;
  transition: left 300ms ease;
  clip-path: inset(0);
  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 255, 0.4);
    opacity: 0.5;
  }
  div {
    color: white;
    position: fixed;
    height: 100%;
    width: 50vw;
    padding: 50px;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    &:first-child {
      left: 50vw;
    }
  }
`;
const Form = styled.form`
  flex: 0 0 50%;
  padding: 10vh 10vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f7;
  label {
    margin-bottom: 5px;
  }
  button,
  input {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 1.25rem;
    outline: none;
  }
  input {
    border: 1px solid #b5b5b5;
    transition: 125ms ease;
    :focus {
      border-color: blue;
      box-shadow: 0 0 0 2pt rgba(0, 0, 255, 0.3);
    }
  }
  button {
    color: white;
    border: none;
    margin-top: 20px;
    background: rgba(0, 0, 255, 0.7);
    box-shadow: 0 3px 15px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-family: "Quattrocento Sans";
    transition: 75ms ease;
    :active {
      background: blue;
      transform: scale(0.95);
    }
  }
  .toggle {
    text-align: center;
    color: #757575;
    span {
      color: blue;
      cursor: pointer;
    }
  }
`;

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Container id="auth">
      <Form>
        <h2>注册</h2>
        <label>用户名</label>
        <input type="text" placeholder="取一个你喜欢的用户名" />
        <label>密码</label>
        <input type="password" placeholder="别忘记密码" />
        <label>确认密码</label>
        <input type="password" placeholder="再输入一次密码" />
        <button onClick={(e) => e.preventDefault()}>注册</button>
        <div className="toggle">
          已经拥有账号?
          <span onClick={() => setIsLogin(true)}>登录</span>
        </div>
      </Form>
      <Form>
        <h2>登录</h2>
        <label>用户名</label>
        <input type="text" placeholder="" />
        <label>密码</label>
        <input type="password" placeholder="" />
        <button onClick={(e) => e.preventDefault()}>登录</button>
        <div className="toggle">
          还没有属于自己的账号?
          <span onClick={() => setIsLogin(false)}>注册</span>
        </div>
      </Form>

      <Slide isLogin={isLogin}>
        <div>
          <h1>欢迎使用 Fabulous</h1>
          <p>在这里，你能定制属于自己的阶段性计划，还能创建日常打卡列表！</p>
        </div>

        <div>
          <h1>凡事预则立，不预则废。</h1>
          <p>——《礼记·中庸》</p>
        </div>
      </Slide>
    </Container>
  );
};

export default Login;

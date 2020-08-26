import "react-datepicker/dist/react-datepicker.css";

import zhCN from "date-fns/locale/zh-CN";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { IoIosAddCircle } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";

import { FromBaseDiv } from "@style/common";

registerLocale("zhCN", zhCN);

const Button = styled.button`
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 1.25rem;
  outline: none;
  color: white;
  border: none;
  margin-top: 20px;
  background: rgba(0, 0, 255, 0.7);
  box-shadow: 0 3px 15px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 75ms ease;
  :active {
    background: blue;
    transform: scale(0.95);
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
  textarea {
    resize: none;
  }
  svg {
    font-size: 1.5em;
    color: rgba(0, 0, 255, 0.7);
    position: relative;
    top: 6px;
    margin-left: 5px;
    cursor: pointer;
  }
  .datePicker {
    display: flex;
    input {
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
      font-size: 1.25rem;
      border: 1px solid #b5b5b5;
      transition: 125ms ease;
      outline: none;
      :focus {
        border-color: blue;
        box-shadow: 0 0 0 2pt rgba(0, 0, 255, 0.3);
      }
    }
    .chooseTime {
      display: flex;
      flex-direction: column;
      &:first-child {
        margin-right: 50px;
      }
    }
  }
`;
const ONE_DAY = 24 * 3600 * 1000;

const NewPlan: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(Date.now() + ONE_DAY));
  const [title, setTitle] = useState("");
  const [desc, SetDesc] = useState("");
  const [priority, setPriority] = useState(0);
  const [plans, setPlans] = useState<string[]>([]);
  const handleStartDate = (date: Date) => {
    setStartDate(date);
    if (date > endDate) {
      setEndDate(new Date(+date + ONE_DAY));
    }
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
    if (date < startDate) {
      setStartDate(new Date(+date - ONE_DAY));
    }
  };
  const addPlan = () => {
    plans.push("");
    setPlans([...plans]);
  };
  const handleModifiedPlan = (index: number, content: string) => {
    plans[index] = content;
    setPlans([...plans]);
  };
  const handleRemovePlan = (index: number) => {
    plans.splice(index, 1);
    setPlans([...plans]);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title, desc, priority, startDate, endDate, plans);
  };
  return (
    <div>
      <Form>
        <label>计划名称</label>
        <FromBaseDiv
          as="input"
          type="text"
          placeholder="起一个响亮的标题"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <label>描述</label>
        <FromBaseDiv
          as="textarea"
          placeholder="对这个计划，你有什么想说的"
          value={desc}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            SetDesc(e.target.value);
          }}
        />
        <label>优先级</label>
        <FromBaseDiv
          as="select"
          placeholder="起一个响亮的标题"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setPriority(+e.target.value)
          }
        >
          <option value="0">⭐⭐⭐</option>
          <option value="1">⭐⭐</option>
          <option value="2">⭐</option>
        </FromBaseDiv>
        <div className="datePicker">
          <div className="chooseTime">
            <label>制定开始日期</label>
            <DatePicker
              locale="zhCN"
              selected={startDate}
              onChange={handleStartDate}
            />
          </div>
          <div className="chooseTime">
            <label>制定结束日期</label>
            <DatePicker
              locale="zhCN"
              selected={endDate}
              onChange={handleEndDate}
            />
          </div>
        </div>
        <label>
          制定事项
          <IoIosAddCircle onClick={addPlan} />
        </label>
        {plans.map((content, index) => (
          <div key={index}>
            <FromBaseDiv
              as="input"
              placeholder="事项内容"
              type="text"
              value={content}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleModifiedPlan(index, e.target.value)
              }
            />
            <FromBaseDiv
              style={{
                marginLeft: "10px",
              }}
              as="input"
              placeholder="目标数字"
              type="number"
            />
            <TiDelete onClick={() => handleRemovePlan(index)} />
          </div>
        ))}
        <Button onClick={submit}>生成</Button>
      </Form>
    </div>
  );
};

export default NewPlan;

import React, { FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Table = styled.div`
  display: table;
  border-radius: 3px;
  border-collapse: collapse;
  margin: auto;
  padding: 5px;
  width: 100%;
  th {
    color: #f1f1f1;
    background: rgba(0, 0, 255, 0.7);
    border-bottom: 4px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size: 23px;
    font-weight: 100;
    padding: 24px;
    text-align: left;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    text-align: left;
  }

  th:first-child {
    border-top-left-radius: 3px;
  }

  th:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  tr {
    border-top: 1px solid #c1c3d1;
    border-bottom-: 1px solid #c1c3d1;
    color: #666b85;
    font-size: 16px;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  /* tr:hover td {
    background: #4e5066;
    color: #ffffff;
    border-top: 1px solid #22262e;
  } */

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd) td {
    background: #ebebeb;
  }

  /* tr:nth-child(odd):hover td {
    background: #4e5066;
  } */

  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 3px;
  }

  td {
    background: #ffffff;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 18px;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #c1c3d1;
    text-align: left;
  }

  td:last-child {
    border-right: 0px;
  }
`;
const Badge = styled.div`
  background: rgba(2, 2, 223, 0.7);
  color: #fff;
  text-align: center;
  margin-left: 2em;
  border-radius: 14px;
  padding: 5px 10px;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 255, 0.7);
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  h1 {
    position: relative;
    padding-bottom: 10px;
    overflow: hidden;
    &::before,
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0%;
    }
    &::after {
      background: rgba(2, 2, 223, 0.7);
      left: -40%;
    }
    &::before {
      background: #fff;
    }
  }
`;
const Desc = styled.p`
  color: #5f6368;
`;
const PlanDetail: FC = () => {
  let { planId } = useParams();
  return (
    <>
      <Title>
        <h1>这是我的2020年度计划</h1>
        <Badge>2020/1/1 - 2021/1/1</Badge>
        <Badge>⭐⭐⭐</Badge>
      </Title>
      <Desc>在新的一年，我要完成这些事项在新的一年，我要完成这些事项</Desc>
      <Table>
        <thead>
          <tr>
            <th>内容</th>
            <th>目标数量</th>
            <th>已完成</th>
            <th>完成度</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-hover">
          <tr>
            <td>我要看完十本前端书籍</td>
            <td>10</td>
            <td>
              <td>5</td>
            </td>
            <td>50%</td>
            <td>删除</td>
            <td>修改</td>
          </tr>
          <tr>
            <td>我要看完十本前端书籍</td>
            <td>10</td>
            <td>5</td>
            <td>50%</td> <td>删除</td>
            <td>修改</td>
          </tr>
          <tr>
            <td>我要看完十本前端书籍</td>
            <td>10</td>
            <td>5</td>
            <td>50%</td> <td>删除</td>
            <td>修改</td>
          </tr>
          <tr>
            <td>我要看完十本前端书籍</td>
            <td>10</td>
            <td>5</td>
            <td>50%</td> <td>删除</td>
            <td>修改</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PlanDetail;

import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DropDown = () => {
  const [show, setShow] = useState(false);
  return (
    <div css={Style}>
      <button onClick={() => setShow((prev) => !prev)}>
        🍡 탕후르 과일 추가
      </button>
      {show && (
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>🍓 딸기</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>🍌 바나나</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>🍏 사과</span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;

export const Style = css`
  position: relative;
  display: inline-flex;
  transform: rotate(0);
  ul {
    position: absolute;
    margin-top: 0.25rem;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 999;
  }
`;

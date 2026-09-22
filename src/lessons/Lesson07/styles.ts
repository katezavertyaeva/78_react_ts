// Общий подход в стилизации с помощью библиотек CSS in JS (emotion)
// заключается в том, что в файле со стилями мы создаём стилизованные компоненты
// JSX + styles. Стили в такие компоненты передаются в виде шаблонной строки
// `Result ${2+1}`
import styled from "@emotion/styled";

interface BoxInfoProps {
  primary?: boolean;
}

export const BoxInfo = styled.div<BoxInfoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-width: 400px;
  min-height: 300px;
  /* background: rgb(181, 180, 230); */
  background: ${({ primary }) =>
    primary ? "rgb(181, 180, 230)" : "rgb(229, 180, 230)"};
  border: 6px solid
    ${({ primary }) => (primary ? " rgb(30, 41, 97)" : " rgb(97, 30, 79)")};
  border-radius: 10px;
  color: rgb(30, 41, 97);
  font-weight: bold;
  font-size: 24px;
`;

export const AvatarImg = styled.img`
  width: 150px;
`;

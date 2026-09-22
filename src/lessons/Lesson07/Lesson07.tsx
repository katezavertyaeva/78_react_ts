// 1 способ - c помощью обычного css во внешнем файле
import "./styles.css";
// 3 способ - импортируем стилизованные компоненты
import { BoxInfo, AvatarImg } from "./styles";
import Avatar from "../../assets/avatar.jpg";

function Lesson07() {
  // Объект стилей для 2 способа
  const textStyles = {
    color: "blue",
    fontSize: "32px",
  };

  return (
    // <div className="lesson07-wrapper" style={{backgroundColor: "grey"}}>
    <div className="lesson07-wrapper">
      {/* 2 способ - inline стили (передача объекта стилей в атрибут style) */}
      <div style={{ color: "red", fontSize: "24px" }}>
        Inline style example 1
      </div>
      <p style={textStyles}>Inline style example 2</p>
      <div style={textStyles}>Inline style example 3</div>
      {/* 3 способ - emotion, вызов уже стилизованных компонентов */}
      <BoxInfo primary>
        Emotion example 1
        <AvatarImg src={Avatar} />
      </BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  );
}

export default Lesson07;

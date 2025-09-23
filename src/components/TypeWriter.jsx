import TextType from "../ReactBits/TextType";

function TypeWritter(props) {
  return (
    <TextType
      text={props.arr}
      typingSpeed={50}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
      className="poppins-thin text-3xl"
    />
  );
}
export default TypeWritter;
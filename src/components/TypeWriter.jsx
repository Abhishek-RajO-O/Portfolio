import TextType from "../ReactBits/TextType";

function TypeWritter() {
  return (
    <TextType
      text={["Text typing effect", "for your websites", "Happy coding!"]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  );
}
export default TypeWritter;
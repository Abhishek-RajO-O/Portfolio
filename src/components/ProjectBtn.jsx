import Magnet from "../ReactBits/Magnet";

function ProjectBtn(props) {
  return (
    <Magnet padding={50} disabled={false} magnetStrength={5} innerClassName={props.className}>
      <p>See my Projects here!</p>
    </Magnet>
  );
}
export default ProjectBtn;
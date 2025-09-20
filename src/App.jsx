import SplitText from "./assets/SpliteText";

function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
    <div className="h-screen flex items-center justify-center bg-blue-400">
      <SplitText
        text="Hello! I am Abhishek Raj"
        className="text-4xl text-white font-semibold text-center"
        delay={100}
        duration={0.3}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      </div>
    </>
  );
}

export default App;

import SplitText from "./assets/SpliteText";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-blue-400">
        <SplitText
          text="Hello! I am Abhishek Raj"
          className="text-4xl text-white font-semibold text-center poppins-regular h-16"
          delay={100}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </>
  );
}

export default App;

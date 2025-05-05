export default function WorkingWithUs() {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="font-outfit font-semibold text-[50px] leading-[72px] tracking-[0%] text-foreground mb-9 text-center">
            What's it Like Working with us?
          </h1>
        </div>
        <div>
          <div className="flex flex-col items-center mt-10 space-y-0 mb-40">
            <Step isCompleted={false} />
            <Step isCompleted={true} />
            <Step isCompleted={false} />
            <Step isCompleted={true} />
            <Step isCompleted={false} />
            <Step isCompleted={true} />
            <Step isCompleted={false} step={"last"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ isCompleted, step }) {
  return (
    <div className={` ${isCompleted ? "flex flex-row-reverse" : "flex"}`}>
      <div className="relative flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center z-10">
          {isCompleted ? (
            <span className="text-white">&#10003;</span>
          ) : (
            <span />
          )}
        </div>
        <div
          className={`${step === "last" ? "h-0" : "w-1 h-36 bg-cyan-500"}`}
        ></div>
      </div>
      <div className={`absolute max-w-[530px] bg-white shadow-accent p-6 border-2 ${isCompleted ? "mr-10" : "ml-10"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas
        deleniti quo, itaque molestiae voluptatibus ad quisquam quis atque
        voluptate nobis quidem doloremque vitae dignissimos, placeat ullam est
        mollitia ipsa, cumque ex iure! Animi, commodi? Quae rerum libero ad
      </div>
    </div>
  );
}

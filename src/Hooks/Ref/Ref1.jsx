import { useRef } from "react";

export default function Ref1() {
  const lastPara = useRef();

  const moveDown = () => {
    lastPara.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <h2>Go To Paragraph</h2>

      <button onClick={moveDown}>Down</button>

      <div>
        <section>
          <img src="https://picsum.photos/200/200" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>

        <section>
          <img src="https://picsum.photos/200/200?grayscale" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>

        <section>
          <img src="https://picsum.photos/seed/picsum/200/200" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>

        <section>
          <img src="https://picsum.photos/id/237/200/200" />
          <p ref={lastPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </section>
      </div>
    </>
  );
}

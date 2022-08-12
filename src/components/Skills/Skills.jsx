import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "../SectionHeader";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import "./Skills.scss";

export default function Skills() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -40,
        opacity: 1,
        stagger: 0.3,
        ease: "power4.out",
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about me" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis ut quam ac ipsum tempus finibus eu eu leo. 
      Sed blandit, tellus quis lacinia bibendum, elit orci 
      pretium magna, id mattis felis erat eu sem. Etiam 
      volutpat odio ac arcu pharetra, eu fringilla velit 
      lobortis. Maecenas hendrerit fermentum leo id interdum. 
      Suspendisse sodales leo a porta porta. Sed viverra 
      tempor elementum. Nam vehicula congue ligula, quis 
      bibendum enim placerat eget. Fusce ultricies felis 
      a metus pretium fermentum. Proin leo nibh, accumsan 
      quis laoreet in, semper vitae quam. Fusce non nisl 
      at urna aliquam rutrum. Vestibulum sit amet tincidunt 
      neque. Aenean commodo pharetra purus ut interdum. 
      Ut eu condimentum ante, at iaculis turpis. Vivamus 
      sit amet lacus fringilla, molestie mi ac, ornare 
      lectus. Proin vehicula elit quis ornare pretium.
      </p>
    </section>
  );
}
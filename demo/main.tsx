import "../src/index.scss";
import { ReactComponent as SampleMd } from "./sample.md";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>
      Sample paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Obcaecati veritatis laboriosam facilis dolorem, voluptate commodi optio
      magnam doloremque dicta sint provident aspernatur dignissimos eum quaerat
      minus. Doloribus totam eligendi optio?
    </p>
    <ol>
      <li>Lion</li>
      <li>Elephant</li>
      <li>Giraffe</li>
      <li>Zebra</li>
      <li>Kangaroo</li>
      <li>Panda</li>
    </ol>
    <p>
      This text has some more examples. <strong>Lorem ipsum dolor</strong> sit
      amet consectetur adipisicing elit.{" "}
      <em>Ipsa unde quia incidunt eius autem reiciendis</em>, porro omnis ea
      quos veniam voluptatum velit aperiam sit! Ipsum quidem `corrupti magni` a
      unde?
    </p>
    <SampleMd />
  </React.StrictMode>
);

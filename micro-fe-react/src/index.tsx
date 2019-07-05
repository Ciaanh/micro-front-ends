import { register } from "web-react-components";

import { Test } from "./components/test";

// call it to register the web component
// this will transform all <your-component>-tags in the markup
// ATTENTION: all custom element tag names MUST contain a dash
// use it anywhere like this:
// <your-component name="Peter" isDisabled onClick="console.log('hello')"></your-component>
register(
  Test,
  "react-el",
  [
    // these attribute values will be json parsed
    "name",
    // this will define a boolean attribute
    "!!isDisabled"
  ],
  // handlers can be created here. The functions of the object can return any
  // new instance of `Event` or `CustomEvent`
  {
    onButtonClick: e => new Event("helloEvt", { bubbles: true })
  }
);

import { getDefaultKeyBinding } from "draft-js";

import { Map } from "immutable";

import {
  faEye,
  faComments,
  faHeading,
  faLongArrowAltDown,
  faCrown,
  faSave,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

export const addOnContainer = [
  {
    type: "block",
    key: "r",
    name: "TITLE",
    action: "title",
    class: "titleBlock",
    element: "h2",
    icon: faHeading,
  },

  {
    type: "block",
    key: "e",
    name: "DIALOGUE",
    class: "dialogueBlock",
    element: "p",
    icon: faComments,
  },

  {
    type: "block",
    key: "d",
    name: "DESCRIPTION",
    action: "description",
    class: "descriptionBlock",
    element: "p",
    icon: faEye,
  },

  {
    type: "inline",
    key: "p",
    name: "CHARACTER",
    icon: faCrown,
    style: {
      fontWeight: 700,
      color: "#af0e0e",
    },
  },

  {
    type: "inline",
    key: "o",
    name: "DISDASCALIE",
    icon: faExclamationCircle,
    style: {
      fontWeight: 300,
      fontStyle: "italic",
      color: "#000",
    },
  },
  {
    key: "Enter",
    name: "INSERT-SOFT",
    icon: faLongArrowAltDown,
  },
  {
    key: "s",
    name: "SAVE",
    icon: faSave,
  },
];

const blocksObj = addOnContainer.reduce(
  (acc, value) => {
    const { element: key, name: element } = value;
    const entry = {};
    entry[key] = element;

    return {
      ...acc,
      ...entry,
    };
  },

  {}
);

export const blockRenderMap = Map(blocksObj);

const keyList = addOnContainer.map((block) => block.key);

export const KeyMaker = (e) => {
  return e.metaKey && keyList.includes(e.key)
    ? addOnContainer.find((addOn) => e.key === addOn.key).name
    : getDefaultKeyBinding(e);
};

export const myBlockStyle = (contentBlock) => {
  const type = contentBlock.getType();

  return addOnContainer.find((block) => block.name === type)?.class;
};

export const myStyleMap = () => {
  return addOnContainer
    .filter((element) => element.type === "inline")
    .reduce((acc, value) => {
      const { name, style } = value;
      const entry = {};
      entry[name] = style;
      return {
        ...acc,
        ...entry,
      };
    }, {});
};

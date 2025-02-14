import { useState } from "react";
import MenuList from "./menu-list";
export default function MenuItem({ item }) {
  const [display, setDisplay] = useState({});
  function handleToggleChildren(label) {
    setDisplay({
      ...display,
      [label]: !display[label],
    });
  }
  return (
    <li>
      <div>
        <p>{item.label}</p>
      </div>
      {item?.children?.length ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {display[item.label] ? "-" : "+"}
        </span>
      ) : null}
      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

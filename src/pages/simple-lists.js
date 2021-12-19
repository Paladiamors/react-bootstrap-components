import React from "react";
import { SimpleUnordered, SimpleOrdered } from "../components/lists/simple";

export default function SimpleLists(props) {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h2>Unordered List</h2>
      <SimpleUnordered items={items} />
      <h2>Ordered List</h2>
      <SimpleOrdered items={items} />
    </div>
  );
}

import React from "react";
import { useParams, useLocaton } from "react-router-dom";

export default function DynamicPerson(props) {
  const { name } = useParams();
  console.log("name is", useParams());
  console.log("props is", props);
  return (
    <div>
      <p>The user was: {name}</p>
    </div>
  );
}

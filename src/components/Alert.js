import React from "react";

export default function Alert(props) {
    const capitilize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    }

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitilize(props.alert.typ)}</strong> {props.alert.msg}
      </div>
    )
  );
}

import React from "react";
import ProcessImage from "./ProcessImage";

function DragDrop() {
  const handleChange = (file: React.ChangeEvent<HTMLInputElement>) => {
    ProcessImage(file.currentTarget.files);
  };
  return (
    <form>
      <input accept=".jpg,.png,.gif" type="file" name="file" onChange={handleChange}></input>
    </form>
  );
}

export default DragDrop;
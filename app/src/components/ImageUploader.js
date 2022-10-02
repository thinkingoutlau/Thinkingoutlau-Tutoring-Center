import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../store/image";

function ImageUploader() {
  const dispatch = useDispatch();
  //   const images = useSelector(({ image }) => image);
  const [image, setImage] = useState({
    data: "",
    name: ""
  });

  useEffect(image => {
    dispatch(uploadImage(image));
  }, []);

  const onChange = event => {
    setImage(event.target.files[0]);
  };
  const onSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(uploadImage(image));
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button disabled={!image.data}>Upload Image</button>
      </form>
      <img src={image.data} />
    </div>
  );
}

export default ImageUploader;

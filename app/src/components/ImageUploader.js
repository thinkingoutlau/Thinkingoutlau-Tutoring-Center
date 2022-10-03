import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../store/image";

function ImageUploader() {
  const dispatch = useDispatch();
  const [image, setImage] = useState({
    name: "",
    data: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    let image = formData.append("file", image.data);
    const response = dispatch(uploadImage(image));
    if (response) setImage(response);
  };

  const handleFileChange = e => {};

  //   const uploadImage = async event => {
  //     const files = event.target.files;
  //     const data = new FormData();
  //     const image = data.append("file", files[0]);
  //     setLoading(true);
  //     const res = dispatch(uploadImage(image));
  //     setLoading(false);
  //   };

  //   useEffect(image => {
  //     dispatch(uploadImage(image));
  //   }, []);

  //   const onChange = event => {
  //     setImage(event.target.files[0]);
  //   };
  //   const onSubmit = async event => {
  //     event.preventDefault();
  //     try {
  //       dispatch(uploadImage(image));
  //       console.log("success");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div>
      <h2>Upload Homework</h2>
      {image.name && <img src={image.data} width="100" height="100" />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={handleFileChange}
        />
        <button type="submit">Upload Image</button>
      </form>
      {/* //   <img src={image.data} /> */}
    </div>
  );
}

export default ImageUploader;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../store/image";
import ImageUploader from "./ImageUploader";
import styled from "styled-components";

function HomeworkHelp() {
  const dispatch = useDispatch();
  //maps images state to props -- this allows us to render it on page
  const images = useSelector(({ image }) => image);

  //dispatches the images on first render since it is an empty array
  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div>
      <ImageUploader />
      <ul>
        {images.map(image => {
          return (
            <div className="homeworkImages" key={image.id}>
              <p>{image.name}</p>
              <img src={image.data} width="500px" height="700px" />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default HomeworkHelp;

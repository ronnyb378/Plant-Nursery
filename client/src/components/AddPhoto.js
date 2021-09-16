import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function AddPhoto() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    console.log("Image file", files[0]);
  };

  return (
    <main className="App">
      <section className="left-side">
        <Form>
          <div className="form-group">
            <input type="file" />
          </div>

          <button type="button" className="btn" onClick={handleImageUpload}>
            Submit
          </button>
          <button type="button" className="btn widget-btn">
            Upload Via Widget
          </button>
        </Form>
      </section>
      <section className="right-side">
        <p>The resulting image will be displayed here</p>
        {imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="displayed-image" />
        )}
      </section>
    </main>
  );
}

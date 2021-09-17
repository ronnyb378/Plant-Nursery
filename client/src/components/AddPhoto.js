import React, { useState } from "react";


export default function AddPhoto(props) {
  const [imageUrl, setImageUrl] = useState(props.value || "");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false)

  const handleImageUpload = () => {
    // const { files } = ;
    setLoading (true)
    const formData = new FormData();
    formData.append("file", file);
    // replace this with your upload preset name
    formData.append("upload_preset", "vap1pxr6");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch(
      "https://api.Cloudinary.com/v1_1/plantsformygarden/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
          setLoading(false)
          const url = `https://res.cloudinary.com/plantsformygarden/image/upload/c_fit,w_500,h_500/f_auto/${res.public_id}.${res.format}`
          setImageUrl(url)
          props.onChange(url)
      })
      .catch((err) => console.log(err));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <main className="App">
      <section className="left-side">
        
          <div className="form-group">
            <input type="file" onChange={handleFileChange} />
          </div>
          {file && (
            <button type="button" className="btn" onClick={handleImageUpload}>
              Attach Photo
            </button>
          )}
          {loading && (
              <div>
                  loading...
              </div>
          )}
        
      </section>
      <section className="right-side">
        {imageUrl && (
          <img src={imageUrl} alt="" className="displayed-image" />
        )}
      </section>
    </main>
  );
}

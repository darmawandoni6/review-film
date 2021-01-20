import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

import defaultImage from "../../assets/images/image-upload-2.png";

const DropzoneFile = (props) => {
  const [image, setImage] = useState();
  const [isRejected, setRejected] = useState(false);

  const { name, accept, maxSize, disabled, isUpload } = props;

  useEffect(() => {}, [image]);

  const renderPreview = () => {
    if (image) {
      return (
        <img src={image} alt="" className="img-fluid" style={{ height: 150 }} />
      );
    }
    return (
      <div className="my-1">
        <img src={defaultImage} alt="" className="img-fluid" />
        <p className="dropzone-size mt-2 mb-0">Drag & drop to upload</p>
      </div>
    );
  };
  return (
    <div className="form-group dropzone">
      <div className="form-control text-center p-3 pointer">
        <Dropzone
          name={name}
          id={name}
          accept={accept}
          maxSize={maxSize}
          onDropAccepted={(values) => {
            isUpload(values[0]);
            setImage(URL.createObjectURL(values[0]));
            setRejected(false);
          }}
          onDropRejected={() => {
            setImage(null);
            setRejected(true);
          }}
          multiple={false}
          disabled={disabled}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {renderPreview()}
            </div>
          )}
        </Dropzone>
      </div>
      {isRejected && <span className="form-error">File is too large!</span>}
    </div>
  );
};

export default DropzoneFile;

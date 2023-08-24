// components/ImageDropzone.tsx

import React, { useCallback } from 'react';
import { useDropzone, DropzoneState, DropEvent } from 'react-dropzone';

interface Props {
  onDrop: (acceptedFiles: File[], fileRejections: DropzoneState['fileRejections'], event: DropEvent) => void;
}

const ImageDropzone: React.FC<Props> = ({ onDrop }) => {
  const onDropCallback = useCallback(onDrop, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropCallback,
    accept: 'image/*' as any,
  });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-4 cursor-pointer">
      <input {...getInputProps()} />
      <p>Drag & drop an image here, or click to select one</p>
    </div>
  );
};

export default ImageDropzone;

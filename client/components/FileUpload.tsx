import React from 'react';
import { useRef } from 'react';

interface FileUploadProps {
  file?: File;
  setFile: Function;
  accept: string;
}

const FileUpload = ({ file, setFile, accept }: FileUploadProps) => {
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <div onClick={() => ref.current.click()}>
        <input
          type="file"
          accept={accept}
          style={{ display: 'none' }}
          ref={ref}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  );
};

export default FileUpload;

import React, { useRef } from 'react';

interface FileUploadProps {
  setFile: (file: File | null) => void;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null);
  };

  return (
    <div>
      <div onClick={() => ref.current?.click()}>
        {' '}
        {/* Use optional chaining */}
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

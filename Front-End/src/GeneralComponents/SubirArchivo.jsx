import '@fontsource/montserrat';
import React, { useState } from 'react';

const SubirArchivo = ({ children, onUpload }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch('http://localhost:3000/user/subirArchivo', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data?.url && onUpload) {
        onUpload(data.url);
      }
    } catch (err) {
      console.error("Error al subir el archivo:", err);
    }
  };

  return (
    <>
     
     <p className='font-montserrat font-bold mt-[10px] text-xl flex flex-start w-[auto] '>Subir Archivo</p>
      <main className="flex flex-col items-center justify-center w-full py-1">
        <div className="flex flex-col items-center justify-center w-[60%] p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-3 3m3-3l3 3M5 16h14"></path>
            </svg>
            <span className="text-gray-600">{fileName || "Arrastra tu archivo aquí o"}</span>
            <span className="text-blue-500 underline">Selecciona un archivo</span>
            <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        
        {children}
      </main>
    </>
  );
};

export default SubirArchivo;

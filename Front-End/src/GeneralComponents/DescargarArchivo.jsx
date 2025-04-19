async function handleDownload( url, name = 'ReporteSolicitud.pdf' ){
  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.download = name;
  enlace.target = '_blank';
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
}

const DescargarArchivo = ({ path }) => (
  <div className='w-[100%] h-[10vh] flex justify-center items-center'>
    <button className='w-[30%] h-[60%] flex items-center justify-center rounded-full border font-bold bg-gray-300 hover:scale-105 transition duration-300' onClick={() => handleDownload(path)}>
      Descargar Archivo
    </button>
  </div>
)

export default DescargarArchivo

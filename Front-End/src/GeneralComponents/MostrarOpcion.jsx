import React, { useState } from "react";

const MostrarOpcion = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <label className="flex items-center self-auto gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={showInfo}
          onChange={() => setShowInfo(!showInfo)}
          className="w-5 h-5 accent-blue-500"
        />
        <span className="text-lg font-medium">Mostrar</span>
      </label>
    </div>
  );
};

export default MostrarOpcion

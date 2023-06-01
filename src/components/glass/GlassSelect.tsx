import {sampleGlasses} from "@src/constants";
import GlassList from "./GlassList";

const GlassSelect = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex">
        <div
          className={`flex-grow text-black-500 border-b-2 border-black text-lg font-bold px-4 py-2`}
        >
          Glass
        </div>
      </nav>
      <GlassList glassInfo={sampleGlasses} />
    </div>
  );
};

export default GlassSelect;

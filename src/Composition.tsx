import { staticFile } from "remotion";

export const MyComposition = () => {
  return (
    <div style={{ flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center", display: "flex" }}>
      <iframe 
        src={staticFile("index.html")} 
        style={{ 
          width: "1080px", 
          height: "1920px", 
          border: "none",
          transform: "scale(1)", 
          background: "black" 
        }} 
      />
    </div>
  );
};

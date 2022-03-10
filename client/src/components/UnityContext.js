import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const config = new UnityContext({
      loaderUrl: "../components/Build/game-board-build.loader.js",
      dataUrl: "../components/Build/game-board-build.data",
      frameworkUrl: "../components/Build/game-board-build.framework.js",
      codeUrl: "../components/Build/game-board-build.wasm",
});

function GameBoard(){

      const [progression, setProgression] = useState(0);

      useEffect(function (){
            config.on("progess", function (progression){
                  setProgression(progression);
            });
      }, []);

      return (
            <div>
                  <p>Loading {progression * 100} percent...</p>
                  <Unity unityContext={config} />
            </div>
      );
}

export default GameBoard;
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const config = new UnityContext({
    loaderUrl: "Build/components.loader.js",
    dataUrl: "Build/components.data",
    frameworkUrl: "Build/components.framework.js",
    codeUrl: "Build/components.wasm"
})

function GameBoard(){

    return <Unity unityContext={config} />;
}

export default GameBoard;
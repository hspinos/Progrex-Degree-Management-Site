import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const config = new UnityContext({
    loaderUrl: "Build/gameboard.loader.js",
    dataUrl: "Build/gameboard.data",
    frameworkUrl: "Build/gameboard.framework.js",
    codeUrl: "Build/gameboard.wasm"
})

function spawnAvatar(){
    config.send("Spawner", "spawnAvatar", "{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1}");
}

function GameBoard(){

    const [isLoaded, setIsLoaded] = useState(false);

    
    useEffect(function () {
      config.on("loaded", () => {
        setIsLoaded(true);
        setTimeout(() => {spawnAvatar()}, 3000)
        console.log("after spawn avatar");
      });
    }, []);
    
    
    return (
        <div>
        <Unity 
            unityContext={config}
            style={{
                visibility: isLoaded ? "visible" : "hidden",
                height: "100%",
                width: "100%",
                border: "6px solid #00E676",
                background: "grey",
            }}
            
        />
        </div>  
    );
}

export default GameBoard;
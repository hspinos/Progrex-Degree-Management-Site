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
    const [windowWidth, setWindowWidth] = useState(1920)
    
    useEffect(function () {
      config.on("loaded", () => {
        setIsLoaded(true);
        setTimeout(() => {spawnAvatar()}, 3000)
        console.log("after spawn avatar");
      });
    }, []);
    
    useEffect(function(){
        let wid =  document.documentElement.clientWidth
|| window.innerWidth
||document.body.clientWidth;
        setWindowWidth(wid)
    },[windowWidth])
    

    console.log(windowWidth)
    return (
        <div>
        <Unity 
            unityContext={config}
            className="border-stone-600 rounded-md border-8 w-full aspect-auto"
            style={{
                visibility: isLoaded ? "visible" : "hidden",
                // height: "50%",
                width: windowWidth*0.75+"px",
                // border: "2px solid #00E676",
                background: "grey",
            }}
        />
        </div>  
    );
}

export default GameBoard;
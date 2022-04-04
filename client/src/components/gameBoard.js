import axios from "axios";
import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";


const config = new UnityContext({
    loaderUrl: "Build/gameboard.loader.js",
    dataUrl: "Build/gameboard.data",
    frameworkUrl: "Build/gameboard.framework.js",
    codeUrl: "Build/gameboard.wasm"
})

const spawnAvatars = async () => {
    try {
        const response = await axios.get("/gameboard/list");
        const jsonData = await response.data;

        console.log(jsonData);
        for (const x of jsonData){
            config.send("Spawner", "spawnAvatar", JSON.stringify(x));
        }
    }
    catch{
        
    }
}

const populateGameBoard = async () => {
    try {
        const response = await axios.get("/gameboard/list");
        const jsonData = await response.data;

        console.log(jsonData);
        for (const x of jsonData){
            config.send("GameManager", "createStudent", JSON.stringify(x));
        }

    }
    catch{
        
    }
}

//React component to be called to spawn the gameboard
function GameBoard(){

    //Uses state to ensure the gameboard is loaded before calling method to spawn avatars
    const [isLoaded, setIsLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(1920)

    useEffect(function () {
      config.on("loaded", () => {
        setIsLoaded(true);
        setTimeout(() => {spawnAvatars()}, 3000)
        console.log("after spawn avatar");
      });
    }, []);
    
    useEffect(function(){
        let wid =  document.documentElement.clientWidth
||      window.innerWidth
||      document.body.clientWidth;
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
import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

//Unity context object is from react-unity-webgl library that acts as brain for embedded WebGL build.
//Build files must be stored in the public folder
const config = new UnityContext({
    loaderUrl: "Build/gameboard.loader.js",
    dataUrl: "Build/gameboard.data",
    frameworkUrl: "Build/gameboard.framework.js",
    codeUrl: "Build/gameboard.wasm"
})

//Handle retrieving data from the data base and spawning all avatars on gameboard based on data returned
function spawnAvatar(){
    //Insert logic for calling database here
    //axios.get call to get all student objects
    //then call config.send within a for loop for i times where i = num of students returned
    //for (int i = 0; i <= axios.getStudents.length; i++)
    //  config.send("Spawner", "spawnAvatar", axios.getStudents[i]);
    config.send("Spawner", "spawnAvatar", "{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1}");
}

//React component to be called to spawn the gameboard
function GameBoard(){

    //Uses state to ensure the gameboard is loaded before calling method to spawn avatars
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
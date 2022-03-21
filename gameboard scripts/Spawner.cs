using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour
{
    [SerializeField]
    public GameObject[] userPrefabs;
    private int userCount = 10;

    // Start is called before the first frame update
    void Start()
    {
        //spawnAvatar("{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1}");
    }

    private void Update()
    {


    }

    private Vector3[] gameBoardCoordinates = {
        new Vector3(-7.6f, 1.84f, -1.0f),
        new Vector3(-7.6f, 0.8f, -1.0f),
        new Vector3(-7.6f, -.21f, -1.0f),
        new Vector3(-7.6f, -1.29f, -1.0f),
        new Vector3(-7.6f, -2.3f, -1.0f),
        new Vector3(-7.6f, -3.38f, -1.0f),
        new Vector3(-5.21f, -3.38f, -1.0f),
        new Vector3(-3.0f, -3.38f, -1.0f),
        new Vector3(-.87f, -3.38f, -1.0f),
        new Vector3(-.87f, -2.3f, -1.0f),
     };


    void spawnAvatar(string userInfo)
    {
        studentModel dataModel = new studentModel();
        createFromJSON(userInfo, dataModel);
        Vector3 spawnPos = gameBoardCoordinates[dataModel.position];
        GameObject avatar = Instantiate(userPrefabs[dataModel.avatarNum], spawnPos, userPrefabs[dataModel.avatarNum].transform.rotation );
        studentModel model = avatar.GetComponent<studentModel>();
        model.FName = dataModel.FName;
        model.LName = dataModel.LName;
        model.position = dataModel.position;
        model.avatarNum = dataModel.avatarNum;
        
    }

    public static void createFromJSON(string userInfo, studentModel model)
    {
       JsonUtility.FromJsonOverwrite(userInfo, model);
    }

}

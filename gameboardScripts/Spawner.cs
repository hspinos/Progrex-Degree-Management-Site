using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour
{
    public GameObject[] userPrefabs;
    private int userCount = 10;

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


    void spawnAvatar(int position, int avatarNum)
    {
        Vector3 spawnPos = gameBoardCoordinates[position];
        int prefabIndex = Random.Range(0, 3);
        Instantiate(userPrefabs[avatarNum], spawnPos , userPrefabs[avatarNum].transform.rotation);

    }

}

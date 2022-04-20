using System.Collections;
using System.Collections.Generic;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject contentPanel;
    public GameObject studentUI;
    public GameObject numStudentsContainer;
    public float cameraDragSpeed = .5f;

    private GameObject gameSpaceParent;
    public int isAdmin;
    private CameraDrag cameraScript;

    [SerializeField]
    private GameObject[] gameSpaceObjects;

   
    void Start()
    {
        studentUI = GameObject.FindGameObjectWithTag("StudentUI");
        studentUI.SetActive(false);

        gameSpaceParent = GameObject.FindGameObjectWithTag("Spaces");
        cameraScript = GameObject.FindGameObjectWithTag("MainCamera").GetComponent<CameraDrag>();
        numStudentsContainer = GameObject.FindGameObjectWithTag("NumStudents");

        //Fake data to use when testing in Unity
        //createStudent("{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1, \"badgeNum\" : 0, \"badgeDescription\" : \"TestBadge0\"}");
        //createStudent("{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1, \"badgeNum\" : 1, \"badgeDescription\" : \"TestBadge1\"}");
        //createStudent("{\"FName\":\"Jonathan\", \"LName\" : \"Nguyen\", \"position\" : 1, \"avatarNum\" : 1, \"badgeNum\" : 2, \"badgeDescription\" : \"TestBadge2\"}");
        
    }

    private void Update()
    {
        if (studentUI.activeInHierarchy)
        {
            cameraScript.dragSpeed = 0;
            gameSpaceParent.SetActive(false);
            
        }
        else
        {
            cameraScript.dragSpeed = cameraDragSpeed;
            gameSpaceParent.SetActive(true);
        }
    }

    public void closeStudentUI()
    {
        studentUI.SetActive(false);
        numStudentsContainer.SetActive(true);
        foreach(Transform child in contentPanel.transform)
        {
            GameObject.Destroy(child.gameObject);
        }
    }

    public void createStudent(string userInfo)
    {
        studentModel dataModel = new studentModel();
        createFromJSON(userInfo, dataModel);
        GameObject piece = gameSpaceObjects[dataModel.position];
        GamePiece studentBank = piece.GetComponent<GamePiece>();
        studentBank.studentsArray.Add(dataModel);
        
    }

    public static void createFromJSON(string userInfo, studentModel model)
    {
        JsonUtility.FromJsonOverwrite(userInfo, model);
    }

    public void setIsAdmin(int isAdmin)
    {
        this.isAdmin = isAdmin;
    }

    public int getIsAdmin()
    {
        return isAdmin;
    }

}

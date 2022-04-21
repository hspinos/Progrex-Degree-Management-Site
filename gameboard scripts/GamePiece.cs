using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GamePiece : MonoBehaviour
{
    public List<studentModel> studentsArray = new List<studentModel>();

    private GameManager gameManager;
    private ListController listController;

    private GameObject numStudentsContainer;
    private GameObject numStudentsUIUse;
    public GameObject numStudentsUIPrefab;
    private Text numStudentsText;
    public Vector3 offset = new Vector3(80.0f, -40.0f, 0f);

    // Start is called before the first frame update
    void Awake()
    {
        gameManager = GameObject.Find("GameManager").GetComponent<GameManager>();
        listController = GameObject.FindGameObjectWithTag("Scroll").GetComponent<ListController>();
        numStudentsContainer = GameObject.FindGameObjectWithTag("NumStudents");

        numStudentsUIUse = Instantiate(numStudentsUIPrefab, numStudentsContainer.transform);

        numStudentsText = numStudentsUIUse.GetComponentInChildren<Text>();
    }

    // Update is called once per frame
    void Update()
    {
        numStudentsUIUse.transform.position = Camera.main.WorldToScreenPoint(transform.position) + offset;
        numStudentsText.text = studentsArray.Count.ToString();
    }

    private void OnMouseDown()
    {
        gameManager.studentUI.SetActive(true);
        gameManager.numStudentsContainer.SetActive(false);
        foreach (studentModel student in studentsArray)
        {
            listController.instantiateStudent(student, gameManager.isAdmin);
        }
    }
}

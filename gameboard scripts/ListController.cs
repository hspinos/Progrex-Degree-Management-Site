using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ListController : MonoBehaviour
{
    public Sprite[] avatars;
    public Sprite[] badges;
    public GameObject studentPrefab;

    public GameObject contentPanel;


    public void instantiateStudent(studentModel student, int isAdmin)
    {
        GameObject currentStudent = Instantiate(studentPrefab) as GameObject;
        ListItemController controller = currentStudent.GetComponent<ListItemController>();
        if (isAdmin == 1)
        {
            controller.name.text = "Name: " + student.FName + " " + student.LName;
        }
        else
        {
            controller.name.text = "Name: ??????????";
        }
        
        controller.avatar.sprite = avatars[student.avatarNum];
        controller.badge.sprite = badges[student.badgeNum];
        controller.badgeDescription.text = "Badge Description: " + student.badgeDescription;

        currentStudent.transform.parent = contentPanel.transform;
        currentStudent.transform.localScale = Vector3.one;
    }
}

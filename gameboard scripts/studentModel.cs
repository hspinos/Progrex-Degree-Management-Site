using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class studentModel : MonoBehaviour
{
    [SerializeField]
    public string FName;
    public string LName;
    public int position;
    public int avatarNum;

    TextMesh userInfo;

    // Start is called before the first frame update
    void Start()
    {
        userInfo = gameObject.GetComponentInChildren<TextMesh>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    private void OnMouseOver()
    {
        userInfo.text = "First Name: " + FName + "\n"
                       + "Last Name: " + LName;
    }

    private void OnMouseExit()
    {
        userInfo.text = "";
    }

    /*
    public void setFName(string FName)
    {
        this.FName = FName;
    }
    public void setLName(string LName)
    {
        this.LName = LName;
    }*/
}

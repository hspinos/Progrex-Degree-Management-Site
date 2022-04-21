using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraDrag : MonoBehaviour
{

    public float dragSpeed = 0.1f;
    private Vector3 dragOrigin;
    public float leftCameraBound = 0;
    public float rightCameraBound = 30;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            dragOrigin = Input.mousePosition;
            return;
        }

        if (!Input.GetMouseButton(0)) return;

        Vector3 pos = Camera.main.ScreenToViewportPoint(Input.mousePosition - dragOrigin);
        Vector3 move = new Vector3(-pos.x * dragSpeed, 0, 0);

        if((transform.position.x <= leftCameraBound && move.x < 0)|| (transform.position.x >= rightCameraBound && move.x > 0))
        {
            move = Vector3.zero;
        }
        transform.Translate(move, Space.World);
    }
}

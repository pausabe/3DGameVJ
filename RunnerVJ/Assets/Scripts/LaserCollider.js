#pragma strict

function Start () {

}

function Update () {

}

 function OnParticleCollision (collision: GameObject ) {
 	
	var rb = collision.GetComponent.<Rigidbody>();
 	rb.AddForceAtPosition(Vector3(0,0,100), transform.position);
 	Debug.Log("aasdf");
 }

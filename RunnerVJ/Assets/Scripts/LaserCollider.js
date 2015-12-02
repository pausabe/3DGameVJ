#pragma strict

var Explosion : GameObject;

function Start () {

}

function Update () {

}

 function OnCollisionEnter (collision: Collision) {
    var contact = collision.contacts[0];
    var rot = Quaternion.FromToRotation(Vector3(0,0,1), contact.normal);

	Instantiate(Explosion, transform.position, rot);
	Destroy(gameObject);
 }

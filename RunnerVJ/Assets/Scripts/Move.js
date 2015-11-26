#pragma strict

var speed : float;
var rotation : float;
var tilt : float; 

function Start () {
	//rigidBody = this.GetComponent.<Rigidbody>();
	//rigidBody.velocity = Vector3(0,0,shipSpeed);
}

function FixedUpdate () {

/*	if (Input.GetKey(KeyCode.UpArrow)) transform.Translate(Vector3(0,1,0)*Time.deltaTime*speed);
	if (Input.GetKey(KeyCode.DownArrow)) transform.Translate(Vector3(0,-1,0)*Time.deltaTime*speed);
	if (Input.GetKey(KeyCode.LeftArrow)) transform.Translate(Vector3(-1,0,0)*Time.deltaTime*speed);
	if (Input.GetKey(KeyCode.RightArrow)) transform.Translate(Vector3(1,0,0)*Time.deltaTime*speed);
*/
	var rb = GetComponent.<Rigidbody>();
	if (Input.GetKey(KeyCode.UpArrow)) GetComponent.<Rigidbody>().AddRelativeForce(0,speed,0);
	//this.transform.position = this.transform.position+(Vector3(0,1,0)*Time.deltaTime*speed);
	else if (Input.GetKey(KeyCode.DownArrow)) GetComponent.<Rigidbody>().AddRelativeForce(0,-speed,0);
	else if (Input.GetKey(KeyCode.LeftArrow)) GetComponent.<Rigidbody>().AddRelativeForce(-speed,0,0);
	else if (Input.GetKey(KeyCode.RightArrow)) GetComponent.<Rigidbody>().AddRelativeForce(speed,0,0);
	else {
		var v = Vector3(-2*rb.velocity.x,-2*rb.velocity.y, 0);
		rb.AddForce(v);
		//rigidBody.velocity = Vector3(0,0,shipSpeed);
		//rigidBody.angularVelocity = Vector3(0,0,shipSpeed);
		
	}
	
	if (Input.GetKey(KeyCode.Q)) GetComponent.<Rigidbody>().AddRelativeTorque(0,0,rotation);
	else if (Input.GetKey(KeyCode.E)) GetComponent.<Rigidbody>().AddRelativeTorque(0,0,-rotation);
	else {
		//var v = Vector3(-2*rb.angularVelocity.x,-2*rb.velocity.y, 0);
		//rb.AddTorque(-2*rb.angularVelocity);
		rb.angularVelocity = Vector3.zero;
		
		//rb.AddRelativeTorque(0, 0, GetComponent.<Rigidbody>().velocity.x * - tilt);
		//rb.rotation = Quaternion.Euler(0, 0, GetComponent.<Rigidbody>().velocity.x * - tilt);
	}
	

}
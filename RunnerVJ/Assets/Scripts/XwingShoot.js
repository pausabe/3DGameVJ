#pragma strict

//var line: LineRenderer;
var ShotSpeed : float; 
var line : GameObject;

function Start () {
//	line = this.GetComponent.<LineRenderer>();
//	line.enabled = false;
	//Screen.lockCursor = true;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space)) {
		FireLaser();
	}
}

function FireLaser() {
	//line.enabled = true;

	var shot = Instantiate(line, transform.position, Quaternion.identity);

	var lineRenderer = shot.GetComponent.<LineRenderer>();
	var ray = new Ray(transform.position, transform.forward);
	//lineRenderer.SetPosition(0, ray.origin);
	//lineRenderer.SetPosition(1, ray.GetPoint(100));
    
    var rb = shot.GetComponent.<Rigidbody>();
    rb.velocity = Vector3(0,0,ShotSpeed);
    /*
    emmiter.transform.position = transform.position; //Vector3(-0.2f,0.35f,-0.54f);
    var p = emmiter.GetComponent.<EllipsoidParticleEmitter>();
    p.Emit();
    //Debug.Log(emmiter.transform.position);
    yield WaitForSeconds(2);
	//line.enabled = false;
	*/
}
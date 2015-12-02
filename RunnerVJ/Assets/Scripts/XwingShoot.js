#pragma strict

//var line: LineRenderer;
var emmiter : GameObject;

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

	//var ray = new Ray(transform.position, transform.forward);
	//line.SetPosition(0, ray.origin);
	//line.SetPosition(1, ray.GetPoint(100));
    
    emmiter.transform.position = transform.position; //Vector3(-0.2f,0.35f,-0.54f);
    var p = emmiter.GetComponent.<EllipsoidParticleEmitter>();
    p.Emit();
    //Debug.Log(emmiter.transform.position);
    yield WaitForSeconds(2);
	//line.enabled = false;
}
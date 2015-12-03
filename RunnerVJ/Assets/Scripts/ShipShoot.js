#pragma strict

//var line: LineRenderer;
var ShotSpeed : float; 
var line : GameObject;

var allGunsShoot = false;

public var guns : GameObject[];

var gunCount : int = 0;

function FireLaser() {
		if (allGunsShoot) {
			for (var i = 0; i < guns.length; i++) {
				FireGun(guns[i]);
			}
		} else {
			FireGun(guns[gunCount]);
			gunCount++;
			if (gunCount == guns.Length) gunCount = 0;
		}

}

function FireGun(gun : GameObject) {
	//line.enabled = true;

	var shot = Instantiate(line, gun.transform.position, Quaternion.identity);

	var lineRenderer = shot.GetComponent.<LineRenderer>();
	var ray = new Ray(gun.transform.position, gun.transform.forward);
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
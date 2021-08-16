set background #fff


//two adjacent rings

// ring
{ rx 180 y -1 } ring

////////////////////////////////////////////

// 6 connected rings

// R1

rule R1 {
	6 * { rz 60 } ring
}

rule ring maxdepth 37 {
	{ z 1 rx 10 } ring
	mesh
}

/////////////////////////////////////////

// spring

rule spring {
	{ z 1 rx 10 ry 10 } spring // switch ry to rz for a looser coil
	mesh
}

////////////////////////////////////////

// feather-like structure

10 * { z 2 s 1.1 } R2

rule R2 { 
	mesh
	9 * { x 1 y 1 z 1 } mesh
	9 * { x -1 y -1 z 1 } mesh
}

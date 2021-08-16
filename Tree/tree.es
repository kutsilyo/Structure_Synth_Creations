set background #fff
set maxdepth 215

// randomly generates a tree
// all rules have the same name so that there are unique branches

{ color #964b00 } R1

rule R1 w 0.2 {
	{ s 0.99 } R1
	R1
}

rule R1 {
	{ x 1 rz 7  s 0.99 } R1
	{ s 1} box
}

rule R1 {
	{ x 1 rz -7 s 0.99 } R1
	{ s 1 } box
}

rule R1 {
	{ x 1 ry 7 s 0.99 } R1
	{ s 1 } box
}

rule R1 {
	{ x 1 ry -7 s 0.99 } R1
	{ s 1 } box
}

rule R1 {
	{ x 1 rx 7 s 0.99 } R1
	{ s 1 } box
}

rule R1 {
	{ x 1 rx -7 s 0.99 } R1
	{ s 1 } box
}
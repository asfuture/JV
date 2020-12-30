function feminino() {
	document.getElementById('feminino').style.display='';
	document.getElementById('masculino').style.display='none';
	document.getElementById('infantil').style.display='none';
}
function masculino() {
	document.getElementById('feminino').style.display='none';
	document.getElementById('masculino').style.display='';
	document.getElementById('infantil').style.display='none';
}
function infantil() {
	document.getElementById('feminino').style.display='none';
	document.getElementById('masculino').style.display='none';
	document.getElementById('infantil').style.display='';
}
function todos() {
	document.getElementById('feminino').style.display='';
	document.getElementById('masculino').style.display='';
	document.getElementById('infantil').style.display='';
}
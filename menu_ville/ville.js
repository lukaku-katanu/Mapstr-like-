var map= document.querySelector("#map");
var paths = map.querySelectorAll('.map__image a');
var links = map.querySelectorAll('.map__list a');

/*
on recupere des variables de telle sortes que lorsqu'on
 survole sur la carte une ville cette derniere sera sélectionner dans la liste à droite
 vice versa
*/

//Polyfill du foreach

if(NodeList.prototype.forEach===undefined){
	NodeList.prototype.forEach = function(callback){
		[].forEach.call(this, callback);
	}
}

//permet d'activer les cellule
var activeArea = function(id){
	map.querySelectorAll('.is-active').forEach(function(item){
			item.classList.remove('is-active')
	})
	if (id !== undefined){
		document.querySelector('#list-' + id).classList.add('is-active')
		document.querySelector("#region-" + id).classList.add('is-active')
	}
}

paths.forEach(function (path){
	path.addEventListener('mouseenter', function()
	{
		var id = this.id.replace('region-',"")

		activeArea(id)
		
	})

	})

links.forEach(function (link){
	link.addEventListener('mouseenter', function(){
		var id = this.id.replace('list-',"")
		activeArea(id)
	})
})

//déselction tous lorsqu'on quite la carte

map.addEventListener('mouseover',function(){
	activeArea()
})

map.addEventListener("click", ville1);
function ville1(){
	alert('VOUS AVEZ ETE REDIRIGER VER LE Departement d île de france');
	window.open('ville1/ville1.html','_blank')

}


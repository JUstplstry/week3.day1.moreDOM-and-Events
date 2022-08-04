git let weaponArticle= document.getElementById("weapons")
let isMouseDown =false

weaponArticle.onmousedown = function(){
	isMouseDown =true
}

weaponArticle.onmouseup = function(){
	isMouseDown =false
}

document.onmousemove = function(event){
		if(isMouseDown){

			weaponArticle.onmousemove = function(){
				
				weaponArticle.style.position = "absolute"
				weaponArticle.style.zIndex = 1000
				weaponArticle.style.left = (event.pageX-weaponArticle.offsetWidth/2)+"px"
				weaponArticle.style.top = (event.pageX-weaponArticle.offsetHeight/2)+"px"
				weaponArticle.style.width ="400px"

		}
	}

}


let outfits= document.getElementById("outfits")
let isMouseDown2 =false

outfits.onmousedown = function(){
	isMouseDown2 =true
}

outfits.onmouseup = function(){
	isMouseDown2 =false
}

document.onmousemove = function(event){
		if(isMouseDown2){

			outfits.onmousemove = function(){
				
				outfits.style.position = "absolute"
				outfits.style.zIndex = 1000
				outfits.style.left = (event.pageX-outfits.offsetWidth/2)+"px"
				outfits.style.top = (event.pageX-outfits.offsetHeight/2)+"px"
				outfits.style.width ="400px"

		}
	}

}
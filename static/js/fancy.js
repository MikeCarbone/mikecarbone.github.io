var sideNav = document.getElementById('sideNav');
var burger = document.getElementById('burger');
var isMenuOpen = false;
var shade = document.getElementById('shade');


//This opens the menu
function menuEnter(){
	sideNav.classList.remove('navSwingOut');
	sideNav.classList.add('navSwingIn');
	burger.classList.remove('burgerFlipSide');
	burger.classList.add('burgerFlipDown');
}

//This closes the menu
function menuLeave(){
	console.log('in menuLeave()');
	sideNav.classList.remove('navSwingIn');
	sideNav.classList.add('navSwingOut');
	burger.classList.remove('burgerFlipDown');
	burger.classList.add('burgerFlipSide');
}

//This will run the proper function depending on which state the meni is in
function menuSwitch(){
	if (isMenuOpen == false){
		menuEnter();
		isMenuOpen = true;
	}
	else{
		menuLeave();
		isMenuOpen = false;
	}
}

//This will open the project cards
var openProject = ''
function projectView(projectId){
	
	var hoverProject = projectId + 'Card';
	openProject = hoverProject;
	showProject(hoverProject);

	function showProject(id){

		document.getElementById(id).style.display = 'block';

		shade.classList = '';
		shade.style.display = 'block';
		shade.classList.add('makeDark');
	}
}

//This will close the project cards
function hideProject(){
	document.getElementById(openProject).style.display = 'none';
	
	shade.classList = '';
	shade.classList.add('makeLight');
	setTimeout(function(){ shade.style.display = 'none'; }, 500);
}
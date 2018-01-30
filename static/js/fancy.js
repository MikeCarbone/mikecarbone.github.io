var sideNav = document.getElementById('sideNav');
var burger = document.getElementById('burger');
var isMenuOpen = false;

var shade = document.getElementById('shade');

function menuEnter(){
	sideNav.classList.remove('navSwingOut');
	sideNav.classList.add('navSwingIn');
	burger.classList.remove('burgerFlipSide');
	burger.classList.add('burgerFlipDown');
	
}

function menuLeave(){
	console.log('in menuLeave()');
	sideNav.classList.remove('navSwingIn');
	sideNav.classList.add('navSwingOut');
	burger.classList.remove('burgerFlipDown');
	burger.classList.add('burgerFlipSide');
	
}

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


function hideProject(){
	document.getElementById(openProject).style.display = 'none';
	
	shade.classList = '';
	shade.classList.add('makeLight');
	setTimeout(function(){ shade.style.display = 'none'; }, 500);
}
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

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.skillFill .level');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});
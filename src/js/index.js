import "./import/modules";

new fullpage( '.wrapper', {
	scrollingSpeed : 1000,
	autoScrolling : true,
	scrollBar : true,
	paddingTop : '0',
	paddingBottom : '0',
	anchors : [ 'hello', 'about' ],
	navigation : true,
	navigationTooltips : [ 'Приветствие', 'О нас', 'Преимущества' ],
	parallax : true,
	animateAnchor : true,
	fixedElements : [ '.fixed-bg' ],
	scrollHorizontally : true,
	controlArrows : false,
	loopHorizontal : false
} );

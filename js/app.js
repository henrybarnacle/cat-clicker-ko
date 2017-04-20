var initialCats =  [{
		name: "Fluffy",
		imgSrc: 'images/fluffy.png',
		clickCount: 0,
		nicknames: ['booboo']

	},
	{
		name: "Ruby",
		imgSrc: 'images/ruby.png',
		clickCount: 0,
		nicknames: ['devil']
	},
	{
		name: "Lucky",
		imgSrc: 'images/lucky.png',
		clickCount: 0,
		nicknames: ['blackie']

	}];



var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = ('kitten');
		} else {
				title = ('adult');
			}
		
		
		
	return title;

}, this);

}

var ViewModel = function() {
	var self = this;
	
	this.catList = ko.observableArray ([]);

	initialCats.forEach(function(catItem) {
		self.catList.push ( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList() [0] );


	

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() +1);

		};

	this.changeCat = function(cat) {
		self.currentCat(cat);
	}
}


var viewModel = new ViewModel();
ko.applyBindings(viewModel);
var ParkingLot = function () {
	this.data = {
		number: null,
		name: null,
		decal: null,
		spotsOpen: null,
		spotsTotal: null,
		beginEnforcement: null,
		endEnforcement: null,
		//voting data starts
		votesFull: null,
		votesMostlyFull: null,
		votesMostlyEmpty: null,
		votesEmpty: null
		//voting data ends
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.triggerCarExit = function () {
		this.data.spotsOpen++;
	};

	this.triggerCarEntry = function () {
		this.data.spotsOpen--;
	};

	this.getInformation = function () {
		return this.data;
	};
	//Starting voting functions
	this.triggerVotesFull = function() {
		this.data.votesFull++;
	};
	this.triggerVotesMostlyFull = function() {
		this.data.votesMostlyFull++;
	};
	this.triggerVotesMostlyEmpty = function() {
		this.data.votesMostlyEmpty++;
	};
	this.triggerVotesEmpty = function() {
		this.data.votesEmpty++;
	};
	/*
	this.triggerVotesWin = function() {
		if(this.data.votesFull == this.data.votesFull)
	}*/
};

module.exports = function (info) {
	var instance = new ParkingLot();

	instance.fill(info);

	return instance;
};
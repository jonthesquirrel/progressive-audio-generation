//prototype: Array.random()
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

var Music = {

	loopDiatonic: function (instrument, octave, speed) {
		Music.loops.push(setInterval(function () {
			Music.playDiatonic(instrument, octave, speed);
		}, speed * 1000));
	},

	loopPentatonic: function (instrument, octave, speed) {
		//overlap notes by 1.5
		Music.loops.push(setInterval(function () {
			Music.playPentatonic(instrument, octave, speed * 1.5);
		}, speed * 1000));
	},

	loops: [],

	playDiatonic: function (instrument, octave, speed) {
		var note_selection = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
		Music.playRandom(note_selection, instrument, octave, speed);
	},

	playPentatonic: function (instrument, octave, speed) {
		var note_selection = ['A#', 'C#', 'D#', 'F#', 'G#'];
		Music.playRandom(note_selection, instrument, octave, speed);
	},

	playRandom: function (note_selection, instrument, octave, speed) {
		var note = note_selection.random();
		console.log(note + octave + ' (' + instrument + ')');
		//speed is measured in seconds
		Synth.play(instrument, note, octave, speed);
	},

	stopLoops: function () {
		while (Music.loops.length > 0) {
			clearInterval(Music.loops.pop());
		}
	}

};

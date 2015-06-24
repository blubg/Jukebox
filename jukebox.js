var parseNote = function(note) {
    var pitch;
    var beats;

    var parts = note.split("*");

    pitch = parts[0];
    if (parts[1] == null) {
        beats = 1;
    } else {
        beats = parts[1];
    }

    return {pitch: pitch, beats: beats};
};

var parseSong = function(song) {

    // song -> "Ab#*7 A B*4 D"
    // split song into an array of notes -> ["Ab#*7", "A", "B*4", "D"]
    var arrayOfNotes = song.split(" ");
    // for each note, call parseNote and stick it in a new array -> [{pitch: "Ab#", beats: 7},....]
    var newNotes = [];
    arrayOfNotes.forEach(function(note) {
        var parsedNote = parseNote(note);
        newNotes.push(parsedNote)
    });

    return newNotes;
};

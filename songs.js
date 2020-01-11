["Scar Tissue", "Red Hot Chili Peppers", 215],
  ["Californication", "Red Hot Chili Peppers", 321]
];
function arrayToSongObj(songs_arr) //render arrays
{
    const title = songs_arr[0];
    const artist = songs_arr[1];
    const length = songs_arr[2];
    return {
        title: title,
        artist: artist,
        length: length
    };
}
function songsArrayToAlbum(title, songs_arr)//This function store arrays in to object
{
    let album = { //Object Album
        title: title,
        songs: []
    };
    for (let i = 0; i < songs_arr.length; ++i)
    {
        const song = arrayToSongObj(songs_arr[i]);
        album["songs"].push(song);
    }
    return album;
}
songsArrayToAlbum(title, song);
function listVideos(data) {
  var firstOutput = "";
  var entries = data.feed.entry;
  var myOutput = "<ul>";
  for (var i = 0; i < data.feed.entry.length; i++) {
    var entriesID = entries[i].id.$t.substring(38);
    var entriesTitle = entries[i].title.$t;
    var entriesDescription = entries[i].media$group.media$description.$t;
    var entriesThumbnail = entries[i].media$group.media$thumbnail[0].url;
    myOutput += '<li><div class="entriestitle">' + entriesTitle + "</div>";
    myOutput +=
      '<iframe src="http://www.youtube.com/embed/' +
      entriesID +
      '?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;fs=1&amp;autoplay="0" frameborder="0" allowfullscreen></iframe>';
    if (i == 0) {
      firstOutput += '<div class="first">';
      firstOutput += "<h2>" + entriesTitle + "</h2>";
      firstOutput +=
        '<iframe src="http://www.youtube.com/embed/' +
        entriesID +
        '?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay="0" frameborder="0" allowfullscreen></iframe>';
      firstOutput += "<p>" + entriesDescription + "</p>";
      firstOutput += "</div>";
      document.getElementById("myplayer").innerHTML = firstOutput;
    }
  }
  document.getElementById("videolist").innerHTML = myOutput;
  myOutput += "</ul>";
}

export default function YoutubeFeed() {
  return (
    <>
      <div id="videogroup">
        <div id="myplayer"></div>
        <div id="videolist"></div>
      </div>
      <Script
        type="text/javascript"
        src="http://gdata.youtube.com/feeds/users/lynda/uploads?alt=json-in-script&callback=listVideos&max-results=6&category=Villalobos"
      ></Script>
    </>
  );
}

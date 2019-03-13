$(document).ready(function() {
  $("#link").hide();
  $("#submit").click(function() {
    var re = /\d+ (.*)$/gm;
    console.log(re);
    var inp = $("#input").val();
    var query = "++(";
    query += "!\"" + re.exec(inp)[1] + "\"";
    var match;
    while (match = re.exec(inp)) {
      query += " OR !\"" + match[1] + "\"";
    }
    query += ")";
    query = encodeURIComponent(query);
    query += "-is%3Adigital&order=usd&dir=asc&as=checklist&unique=cards"
    $("#link").attr("href", "https://www.scryfall.com/search?q=" + query);
    $("#link").show();
  });
});

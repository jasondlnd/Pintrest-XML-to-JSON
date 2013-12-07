var getFeed = function(feed) {
	var url = feed;
	url += "&callback=parse_res"
	var scripttag = document.createElement("script");
	scripttag.setAttribute("type","text/javascript");
	scripttag.setAttribute("charset","utf-8");
	scripttag.setAttribute("src",url);
	document.getElementsByTagName("body")[0].appendChild(scripttag);
}

var parse_res = function(data) {
	var entries = data.responseData.feed.entries;
	var container = document.getElementById("post_results");
	var list = document.createElement("ul");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
		}
	 //Get all items in the RSS feed:	
	 for (var i=0; i<entries.length; i++){
		 var listItem = document.createElement("li");
		 		var title = entries[i].title;
				var description = entries[i].contentSnippet;	
				 // create a link based off of the description:
				 var link = document.createElement("a");
				 link.setAttribute("href", entries[i].link);
				 link.setAttribute("target","_blank");
				 var titledesc = document.createTextNode("Title: ");
				 var linebreak = document.createElement('br');
				 var title = document.createTextNode(title);
				 var desc = document.createTextNode("Description: ");
				 var description = document.createTextNode(description);
				 link.appendChild(titledesc);
				 link.appendChild(title);
				 link.appendChild(linebreak);
				 link.appendChild(desc);
				 link.appendChild(description);
				 // insert the markup
				 listItem.appendChild(link);
				 list.appendChild(listItem);
				 container.appendChild(list);
			}
}



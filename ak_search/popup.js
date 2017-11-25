document.getElementById('submit').addEventListener('click',function(){
    var input1= document.getElementById('input1').value;
    
    chrome.tabs.create({url: "https://extratorrent.cd/search/?search="+input1});
	chrome.tabs.create({url:"https://www.skytorrents.in/search/all/ed/1/?l=en-us&q="+input1});
	chrome.tabs.create({url:"https://rarbg.to/torrents.php?search="+input1});
	
});


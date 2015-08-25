$( document ).ready(function() {
		$(".button-controls").click(function(event){
			$(".button-controls").find('img').delay(500).toggle();
			$("#current-song-wrapper").animate({height : "toggle"},500);
			var songListHeight = $("#three-div-wrapper").height();
			var SongListHeight = (songListHeight == 400) ? 550 : 400;
			$("#three-div-wrapper,#songs-lists-wrapper,#song-list,#recently-added,#my-list").animate({height :SongListHeight},500);
		});
		
		$("#airtist li").click(function(Event){
			var artistname = $(this).text();
			$("#selected-artist").text(artistname);
		});
		$(".play-now").click(function(){
			var htmlcontent = $(this).parent("li").html();
			var id="#my-list ul";
			addItemstoUl(id,htmlcontent);
			removeDuplicateItems('my-list-ul');
		});
		
		
		
		
		//functions
		
		//Add items to ul with li tags para
		var addItemstoUl = function(id,htmlcontent){
    $(id).append('<li>'+htmlcontent+'</li>');
    
    //remove dupes from li
    }

		$('<style></style>').appendTo($(document.body)).remove();
 });
 
 function removeDuplicateItems(id) {    
 var ul = $('#' + id);
      $('li', ul).each(function() {        
      if($('li:contains("' + $(this).text() + '")', ul).length > 1)
        $(this).remove();   
         });
         }
var localeArray = {
	1: "enHK",
	2: "zhHK",
}
var lang = 'zhHK';

$(function(){
	//$(".select_"+lang).addClass("lang_selected");
	BindAll();
	//SetLang(lang);
	$(".lang_button[data-lang='"+lang+"']").trigger("click");
});


function BindAll(){
	$(".lang_button").click(function(event){
		var targetLang = $(this).attr("data-lang");
		
		/*
		if(targetLang==lang){
			return false;
		}
		else{
			SetLang(targetLang);
			//ChangeLang(targetLang);
			$(".lang_button").removeClass("lang_selected");
			$(this).addClass("lang_selected");
			return false;
		}
		*/
		
		SetLang(targetLang);
		$(".lang_button").removeClass("lang_selected");
		$(".lang_button[data-lang='"+targetLang+"']").addClass("lang_selected");
		//$(this).addClass("lang_selected");
	});

}

function SetLang(lang){
	console.log("lang = "+lang);
	for(var i=1; i<=Object.keys(localeArray).length; i++){	
		if(localeArray[i] == lang){
			//$(".lang_"+localeArray[i]).css('display', 'inline-block');
			$(".lang_"+localeArray[i]).css('display', 'initial');
			$("#languageButton_"+localeArray[i]).addClass("lang_selected");
			
			$("input").each(function(index, element) {
				$(this).attr("placeholder", $(this).attr("data-placeholder_"+lang));
			});
			$("textarea").each(function(index, element) {
				$(this).attr("placeholder", $(this).attr("data-placeholder_"+lang));
			});
			$("option").each(function(index, element) {
				$(this).html($(this).attr("data-placeholder_"+lang));
			});
			
			switch($(this).prop("tagName")){
				case "LI":
					if ($(this).parent().hasClass("pagination")){
						if ($(this).find("a").length == 0){
							$(this).html($(this).attr("lang_"+localeArray[i]));
						}else{
							$(this).find("a").html($(this).attr("lang_"+localeArray[i]));
						}
					}else{
						$(this).html($(this).attr("lang_"+localeArray[i]));
					}
				break;
				default: break;
			}
			$("#languageButton_"+localeArray[i]).addClass("lang_selected");
		}
		else{
			$(".lang_"+localeArray[i]).css('display', 'none');
			$("#languageButton_"+localeArray[i]).removeClass("lang_selected");
		}

	}
}

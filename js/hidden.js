/**
 * Created by acer on 2017/3/16.
 */
(function(){
    $("#nav").text("收起").css({
        color : 'white',
        textAlign : 'center',
    }).click(function(){
        $(".main-content").toggle(500);
        if($("#nav").html() == "收起"){
            $("#nav").html("展开");
        }else{
            $("#nav").html("收起");
        }
    });
})();

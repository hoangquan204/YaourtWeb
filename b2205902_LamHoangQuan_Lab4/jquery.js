var d=new Date();
var ads="Khách hàng có ngày sinh trong tháng "+d.getMonth()+" sẽ được tặng 2 phần sữa chua dâu cho đơn hàng đầu tiên trong tháng.";
$(document).ready(function(){$("footer").append( "<div id='adscontainer'><span id='adstext'><h2>"+ads+"</h2></span></div>")})
var wm=($(window).width()-$("main").width())/2;
if(wm>=200)
{ adsVerEffect(); }
else
{ adsHorEffect(); }
//hiển thị tin nổi bật ở trang chủ
headlineEffect(); 
/*Quảng cáo cuộn dọc màn hình**/
function adsVerEffect() {
    $("#adscontainer").addClass("adsvercontainer container");
    $("#adscontainer").css("width",($(window).width()-
    $("main").width())/2);
    $("#adstext").addClass("adsvertext adstext"); 
    $('#adstext').css('top', $('#adscontainer').height());
    $('#adstext').animate({
    top: '-='+($('#adscontainer').height()+$('#adstext').height())
    }, 30000, function() {
    adsVerEffect();
    });
    }
    /*Quảng cáo cuộn ngang màn hình**/
    function adsHorEffect() {
    $("#adscontainer").addClass("adshorcontainer container");
    $("#adscontainer").css("left",$("main").position().left);
    $("#adscontainer").css("width",$("main").width());
    $("#adstext").addClass("adshortext adstext"); 
    $('#adstext').css('left', $('#adscontainer').width()); 
    $('#adstext').animate({
    left: '-='+($('#adscontainer').width()+$('#adstext').width())
    }), 30000, function() {
    adsHorEffect();
    }}
    var headlineContent=[{"title":"Bánh flan sữa chua - sự kết hợp hoàn hảo",
        "photo":"images/trangchu/headline/headline1.jpg"},
        {"title":"Sữa chua làm từ sữa dê - đậm đà hương vị khó quên",
        "photo":"images/trangchu/headline/headline2.jpg"},
        {"title":"Thưởng thức sữa chua theo cách của bạn",
        "photo":"images/trangchu/headline/headline3.jpg"}];
        function init()
        {
        for(var i=0;i<headlineContent.length;i++)
        {var item=headlineContent[i];
        var dc=$("<div>");//div container
        $("<span ><h3>"+item.title+"</h3></span>").appendTo(dc);
        $("<img src='"+item.photo+"'/>").appendTo(dc);
        $("#headline").append(dc);
        }
        }
        function headlineEffect()
        {
        init();
        //ẩn các thẻ div sau thẻ div đầu tiên
        $("#headline > div:gt(0)").hide();
        setInterval(function() { 
        $('#headline > div:first')//lấy phần tử đầu tiên
        .hide()//ẩn phần tử đầu tiên
        .next()//chuyển qua phần tử kế tiếp
        .fadeIn(1000)//hiển thị phần tử hiện tại
        .end()//quay về phần tử đầu
        .appendTo('#headline');//thêm phần tử div đầu vào cuối danh sách
        }, 5000); 
        }

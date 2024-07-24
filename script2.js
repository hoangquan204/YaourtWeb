function doSearch(){
    var myForm = document.getElementById('myForm');
    if(myForm.words.value.length>0)
        myForm.submit();
}
function showSearch(){
    var url = new URL(window.location);
    var key_words = url.searchParams.get('words');
    var container = document.getElementById('container');
    var search_input = document.getElementById('key_words');
    container.innerHTML = '<h1>Tu khoa: <b>'+key_words+'</b>'+'</h1>';
    search_input.value = key_words+'';
}
function checkKeyWord(e){
    var key = e.which || e.key;
    if(key===32)
        doSearch();
}
function formValidate(form){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(form.email.value)==false){
        alert('Vui long nhap lai email!');
        form.email.focus();
        return false;
    }
    if(form.password.value.length<8){
        alert('Mật khẩu phải có tối thiểu 8 kí tự!');
        return false;
    }
    return true;
}
function formValidate_LienHe(form){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(form.email.value)==false){
        alert('Vui long nhap lai email!');
        form.email.focus();
        return false;
    }
    if(form.name.value.length<4){
        alert('Họ tên có ít nhất 4 kí tự!');
        return false;
    }
    if(form.content.value.length<10){
        alert('Nội dung liện hệ có ít nhất 10 kí tự!');
        return false;
    }
    return true;
}
function formValidate_DangKy(form){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(form.email.value)==false){
        alert('Nhap lai email!');
        form.email.focus();
        return false;
    }
    if(form.password.value.length<8){
        alert('Mat khau phai co it nhat 8 ki tu!');
        return false;
    }
    if(form.repassword.value!=form.password.value){
        alert('Nhap lai mat khau khong khop!');
        return false;
    }
    if(form.capDoBac.checked==false && form.capDoVang.checked==false && form.capDoBachKim.checked==false){
        alert('Chua chon cap do thanh vien!');
        return false;
    }
    if(form.anhDaiDien.value==''){
        alert('Chua chon anh dai dien!');
        return false;
    }
    if(form.dongYDieuKhoan.checked==false){
        alert('Ban chua dong y dieu khoan!');
        return false;
    }
    return true;
}

var listItem = {
    'sp1': {
        'name': 'Sữa chua vị Kiwi',
        'price': 21000,
        'photo': 'images/sanpham/kiwi.jpg'
    },
    'sp2': {
        'name': 'Sữa chua vị xoài',
        'price': 21000,
        'photo': 'images/sanpham/mango.jpg'
    },
    'sp3': {
        'name': 'Sữa chua vị Dưa lưới',
        'price': 21000,
        'photo': 'images/sanpham/cantaloupe.jpg'
    },
    'sp4': {
        'name': 'Sữa chua vị Măm Xôi',
        'price': 21000,
        'photo': 'images/sanpham/blackberry.jpg'
    },
    'sp5': {
        'name': 'Sữa chua vị Dâu tây',
        'price': 21000,
        'photo': 'images/sanpham/strawberry.jpg'
    },
    'sp6': {
        'name': 'Sữa chua vị Việt quốc',
        'price': 21000,
        'photo': 'images/sanpham/blueberry.jpg'
    },
    'sp7': {
        'name': 'Sữa chua vị Bưởi',
        'price': 21000,
        'photo': 'images/sanpham/grapes.jpg'
    },
    'sp8': {
        'name': 'Sữa chua vị Táo xanh',
        'price': 21000,
        'photo': 'images/sanpham/green-apple.jpg'
    },
    'sp9': {
        'name': 'Sữa chua vị Dứa',
        'price': 21000,
        'photo': 'images/sanpham/pineapple.jpg'
    },
}
    function addCart(code){
        var checkValue = document.getElementById(code).value;
        if(checkValue==='')
            window.alert('Ban chua nhap so luong');
        else{
            var number = parseInt(checkValue);  
            if(window.localStorage[code]===undefined){
                if(number<100){
                    window.localStorage.setItem(code, number);
                    window.alert('Da them san pham: '+code+' voi so luong la '+number);
                }else{
                    window.localStorage.setItem(code, 100);
                    window.alert('Da them san pham: '+code+' voi so luong la 100');
                }
            }else{
                var current = parseInt(window.localStorage.getItem(code));
                if((number+current)>100){
                    window.localStorage.setItem(code, 100);
                    window.alert('Da them san pham: '+code+' voi so luong toi da la '+100);
                }else{
                    window.localStorage.setItem(code, (number+current));
                    window.alert('Da them san pham '+code+' voi so luong la '+(number+current));
                }
            }
        }
    }
    function getDiscountRate(){
        var d=new Date();//lấy ngày hiện tại của máy tính 
        var weekday=d.getDay();//lấy ngày trong tuần 
        var totalMins=d.getHours()*60+d.getMinutes();//đổi 
        if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
            return 0.1;
        return 0;
    }
    function showCart(){
        var showCart = document.getElementById('showCart');
        var htmlContext = '';
        var totalPretax = 0;
        for(var i=0; i<window.localStorage.length; i++){
            var key = window.localStorage.key(i);
            var name = listItem[key].name;
            var photo = listItem[key].photo;
            var number = window.localStorage.getItem(key);
            var price = listItem[key].price;
            var total = parseInt(number)*parseInt(price);
            totalPretax += total;
            console.log(photo+","+name+","+number+","+price+","+total);
            htmlContext += `<tr><td><img src=${photo}></td><td>${name}</td><td><input type="number" min=0 max=100 id="input_update_${key}" value="${number}"></td><td>${price}</td><td>${total}</td><td><btn class="btn btn-update" id="btn-update-${key}" value="${key}" >Cập nhật  <i class="fa-solid fa-rotate"></i></btn></td><td><btn class="btn btn-delete" value="${key}">Xóa <i class="fa-solid fa-trash"></i></btn></td></tr>`;
        }
        var discount = getDiscountRate()*parseFloat(totalPretax);
        var tax = 0.1*(totalPretax-discount);
        var totalPrice = totalPretax - discount + tax;

        htmlContext += `<tfoot class="table__foot"><tr><td colspan="7" style="text-align: right">Tống thành tiền (A) = ${totalPretax.toLocaleString()} đ</td></tr>`;
        htmlContext += `<tr><td colspan="7" style="text-align: right">Chiết Khấu (B) = 0.1 x A = ${discount.toLocaleString()} đ</td></tr>`
        htmlContext += `<tr><td colspan="7" style="text-align: right">Thuế (C) = 10% x (A-B) = ${tax.toLocaleString()} đ</td></tr>`
        htmlContext += `<tr><td colspan="7" style="text-align: right">Tống đơn hàng = A - B + C = ${totalPrice.toLocaleString()} đ</td></tr></tfoot>`
        htmlContext += `<tr><td colspan="7" style="text-align: center"><div class="btn">Xác nhận đặt hàng</div></tr></tfoot>`
 
        showCart.innerHTML += htmlContext;
        
        var list_btn_update = document.querySelectorAll(".btn.btn-update");
        for(var param of list_btn_update){
            param.onclick = function(){
                window.alert(param.id);
                var update_input = document.getElementById("input_update_"+key).value;
                if(parseInt(update_input)>=0&&parseInt(update_input)<=100){
                    window.localStorage.removeItem(key);
                    window.localStorage.setItem(key, update_input);
                }
            }
        }
    }

   
    

  
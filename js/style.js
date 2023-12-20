
var nameBook = document.getElementById("nameBook")
var urlInput = document.getElementById("urlInput")

var product;

if(localStorage.getItem("product")==null){
    product =[];

}else{
    product=JSON.parse(localStorage.getItem("product"))
    displayadd(product);
}


function addBook(){

    if((valiName()==true &&valiUrl()==true )){

    var infoBook ={
        book:nameBook.value ,
        url: urlInput.value

    }
    product.push(infoBook );
    clearForm()
    displayadd(product)
    localStorage.setItem("product",JSON.stringify(product))
}else{
    urlInput.style.border="none"
alert("kiiiiiii")
}
   
}

function displayadd(elem){
    var cart='';
    for( var i =0; i<elem.length; i++){
        cart+=` <tr>
        <td>${i+1}</td>
        <td>${elem[i].book}</td>
        <td><button onclick="redirect(${i})"class="bg-info border-0" >Visit</button></td>
        <td><button onclick="deletElem(${i})" class="bg-danger border-0" >Delete</button></td>
    </tr>`

    }
    document.getElementById("demo").innerHTML=cart;
}

function clearForm(){
    nameBook.value ="";
    urlInput.value ="";
}

function deletElem(index){
    product.splice(index,1);
    localStorage.setItem("product",JSON.stringify(product))
    displayadd(product)

}

function redirect(urls){

window.open(elem[i].url);
    // displayadd(product)
}


function valiName(){
    var regex =/^[A-Z][a-z]{3,8}$/
    if(regex.test(nameBook.value) ==true){
        nameBook.style.border="none"
        return true
    }else{
        nameBook.style.border="5px solid red"
        return false
    }
    // return regex.test(nameBook.value)
}

function valiUrl(){
    var regexUrl =/^(https?|ftp):\/\/((a-z\d?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/;

    if(regexUrl.test(urlInput.value) ==true){
        urlInput.style.border="none"
        return true
    }else{
        urlInput.style.border="5px solid red"
        return false
    }
}
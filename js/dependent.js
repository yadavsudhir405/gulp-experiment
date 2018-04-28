var messageElement = document.querySelector("#message");
var showen = false;
function handleClick(){
    toggleShowen();
}
function toggleShowen() {
    if(showen == true){
        showen = false;
    }else{
        showen = true;
    }
    handleDisply();
}
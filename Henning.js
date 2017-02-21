const btn = document.querySelectorAll('.row');

function toggleActive(){
    this.classList.toggle('open');
}
btn.forEach(button => button.addEventListener('click', toggleActive));

$(".row").mouseover(function(e){         
    $(".pil"+this.id).show();         
});
$(".row").mouseout(function(){        
    $(".pil"+this.id).hide();     
});
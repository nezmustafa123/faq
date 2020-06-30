//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
//    console.log(question);
    //button within the article
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    
    btn.addEventListener('click', function(){
    questions.forEach(function(item){
        //if article doesn't match item that you're clicking on
        console.log(item);
        
        if(item !== question) {
            item.classList.remove('show-text');
        }
    });
 
         question.classList.toggle('show-text');
    });
    
});















//const btns = document.querySelectorAll('.question-btn');
//btns.forEach(function(btn){
//    btn.addEventListener('click', function(e){
//        console.log(e.currentTarget);
//        //console log current target
//        
//    const question =  e.currentTarget.parentElement.parentElement
//        question.classList.toggle('show-text');
//        
//    });
//});

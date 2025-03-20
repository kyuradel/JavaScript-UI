
 /*$('.tab-button').eq(0).on('click', function() {
   document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('orange');
    });
    document.querySelectorAll('.tab-content').forEach(button => {
        button.classList.remove('show');
    });

    document.querySelectorAll('.tab-button')[0].classList.add('orange');
    document.querySelectorAll('.tab-content')[0].classList.add('show');
});
*/
/*
document.querySelector('.list').addEventListener('click', (event) => {
    if (event.target.classList.contains('tab-button')) { 
        const index = Array.from(document.querySelectorAll('.tab-button')).indexOf(event.target);
        const buttons = document.querySelectorAll('.tab-button');
        const contents = document.querySelectorAll('.tab-content');

        document.querySelector('.tab-button.orange')?.classList.remove('orange');
        document.querySelector('.tab-content.show')?.classList.remove('show');

        buttons[index].classList.add('orange');
        contents[index].classList.add('show');
    }
});
*/

const m = $('.tab-button').length;
/*
for (let i = 0; i < m; i++){

  $('.tab-button').eq(i).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  })

};

*/

for (let i = 0;i < m; i++) {
  
  $('.tab-button').eq(i).on('click', function() {
    openTab(i);
  });
}

function openTab(i) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
}
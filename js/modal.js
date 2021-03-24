let serviceListItems = document.querySelectorAll('#serviceList li a');

serviceListItems.forEach(item => {
  item.addEventListener('click',function(){
    serviceListItems.forEach(listItem => {
      listItem.classList.remove('border','border-secondary','border-width-s');
    });
    this.classList.add('border','border-secondary','border-width-s');
  });
});

$('button[data-dismiss="modal"][data-toggle="modal"]').on('click',function(){
  let target = $(this).data('target');
  console.log(target);
  $(target).on('shown.bs.modal', ()=>{
    $('body').addClass('modal-open');
  });
});
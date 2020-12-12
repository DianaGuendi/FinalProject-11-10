document.addEventListener('DOMcontentLoaded', function(){
var modals = document.querySelectorAll('.modal');
M.Modal.init(modals);
var items = document.querySelectorAll('.collapsible');
M.collapsible.init(items);
});
 $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let newListItem = $("#shopping-list-entry").val();

    $('.shopping-list').append(
        '<li> <span class="shopping-item">' + newListItem + '</span>' +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span> </button>' +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        '</button> </div> </li>');
    });

    //remove item function
$('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();

    });

$('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('span.shopping-item ').toggleClass('shopping-item__checked');
    })
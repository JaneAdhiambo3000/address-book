// business logic
function Contact(first, last){
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function(){
    $("form#new-contact").submit(function(event){
        event.preventDefauFlt;
    
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("ul#contact").append("<li><span class = 'contact'>" + newContact.fullName()  + "</span></li>");

        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
    });
});

$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
}); 
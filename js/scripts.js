//Back end logic / objects
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
};

function Address(address, state, zip, phone){
  this.address = address;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
}

Address.prototype.fullAddress = function(){
  return this.address + ", " + this.state + " " + this.zip;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}


//front end UI//
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputFirstName = $("input#first-name").val();
    var inputLastName =  $("input#last-name").val();
    var inputAddress =  $("input#address").val();
    var inputState =  $("input#state").val();
    var inputZip =  $("input#zip").val();
    var inputPhone =  $("input#phone").val();

    var newContact = new Contact(inputFirstName, inputLastName);
    var newAddress = new Address(inputAddress, inputState, inputZip, inputPhone);


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").toggle();
      $("show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newAddress.fullAddress());
      $(".phone").text(newAddress.phone);
    });
    $("input#first-name").val("");
    $("input#last-name").val("");
  });
});

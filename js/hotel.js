var test = {
    fname: "Andrew",
    lname: "Bishop",
    age: 19,
    display: function(){console.log("in function")
        return this.fname+" "+this.lname
    }

};
console.log(test.display())
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#name').val(),
        checkin: $('#checkin').val(),
        num: $('#num').val(),
        room: $('#room').val(),
        checkout: $('#checkout').val()
    };
    alert(guest.name+" reserve a room for "+guest.num+" and the room is a  "+guest.room+" and they will be checking in on "+guest.checkin+" and checking out on "+guest.checkout);
    guestgroup.push(guest);
    console.log(guestgroup);
}
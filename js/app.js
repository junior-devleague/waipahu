// List of Students
console.log('hello');
var students = [
  {
    name: 'Joelle Torneros',
    journal: '#',
    github:'#',
    medium: '#',
    medium_username: 'jm.torenros'
  }
];



/*
<div class="student">
      <h4>Student Name</h4>
      <div class="link_list">
        <ul>
          <li><a href="#">Journal</a></li>
          <li><a href="#">Medium</a></li>
        </ul>
      </div>
    </div>
*/

students.forEach(function( person ) {
  var student = $(
    '<div class="student">' +
      '<h3>'+ person.name +'</h3>' +
      '<div class="link_list">' +
        '<ul>' +
          '<li><a href="'+ person.journal +'">Personal Journal</a></li>' +
          '<li><a href="'+ person.github +'">Github</a></li>'+
          '<li><a href="'+ person.medium +'">Medium Blog</a> - '+ person.medium_username +'</li>' +
        '</ul>' +
      '</div>' +
    '</div>'
    ).appendTo('.students');
});
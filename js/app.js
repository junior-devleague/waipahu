// List of Students
console.log('hello');
var students = [
  {
    name: 'Braden Amorozo',
    journal: 'https://braden808.github.io/Journal/',
    github:'https://github.com/braden808/',
    github_username:'braden808',
    medium: 'https://medium.com/@braden808',
    medium_username: 'braden808'
  },
  {
    name: 'Kayla Diniega',
    journal: 'https://cutiegirl526.github.io/Journal-Blog/',
    github:'https://github.com/cutiegirl526/',
    github_username:'cutiegirl526',
    medium: 'https://medium.com/@cutiegirl526',
    medium_username: 'cutiegirl526'
  },
  {
    name: 'Kay Calpito',
    journal: 'https://keyen331.github.io/Journal/',
    github:'https://github.com/keyen331/',
    github_username:'keyen331',
    medium: 'https://medium.com/@banayos.kay',
    medium_username: 'banayos.kay'
  },
  {
    name: 'Dylan Tucker',
    journal: 'https://aoe-dylan.github.io/Journal/',
    github:'https://github.com/AOE-Dylan',
    github_username:'AOE-Dylan',
    medium: 'https://medium.com/@Dylaaaaan',
    medium_username: 'Dylaaaaan'
  },
  {
    name: 'Zak Sakata',
    journal: 'https://zakattack9.github.io/Journal/',
    github:'https://github.com/zakattack9',
    github_username:'zakattack9',
    medium: 'https://medium.com/@zak.s_',
    medium_username: 'zak.s_'
  },
  {
    name: 'Maddie Kawakami',
    journal: 'https://madikawakami.github.io/journal/',
    github:'https://github.com/madikawakami',
    github_username: 'madikawakami',
    medium: 'https://medium.com/@19madami',
    medium_username: '19madami'
  },
  {
    name: 'Issah Harris',
    journal: 'https://xxxyoloswagxxx.github.io/journal-/',
    github:'https://github.com/xXxYoLoSwAgxXx',
    github_username: 'xXxYoLoSwAgxXx',
    medium: 'https://medium.com/@harrisfambam',
    medium_username: 'harrisfambam'
  },
  {
    name: 'Cornelious Mooring',
    journal: 'https://github.com/Corneliousm808/journal2',
    github:'https://github.com/Corneliousm808',
    github_username: 'Corneliousm808',
    medium: 'https://medium.com/@corn808',
    medium_username: 'corn808'
  },
  {
    name: 'Ian Acosta',
    journal: 'https://yoscroll.github.io/Journal/',
    github:'https://github.com/Yoscroll',
    github_username: 'Yoscroll',
    medium: 'https://medium.com/@ianhacosta',
    medium_username: 'ianhacosta'
  },
  {
    name: 'Jessica Lopez',
    journal: 'https://heeyjessii.github.io/Journal/',
    github:'https://github.com/heeyjessii',
    github_username: 'heeyjessii',
    medium: 'https://medium.com/@11lopez.jessica',
    medium_username: '11lopez.jessica'
  },
  {
    name: 'Mark Demesillo',
    journal: 'https://MarkIsNotTaken.github.io/Journal/',
    github:'https://github.com/MarkIsNotTaken',
    github_username: 'MarkIsNotTaken',
    medium: 'https://medium.com/@Segnis',
    medium_username: 'Segnis'
  },
  {
    name: 'Angela Geronimo',
    journal: 'https://ageronimo.github.io/journal/',
    github:'https://github.com/ageronimo',
    github_username: 'ageronimo',
    medium: 'https://medium.com/@angelageroniimo',
    medium_username: 'angelageroniimo'
  },
  {
    name: 'Kyle Lingat',
    journal: 'https://kylelingat.github.io/Journal/',
    github:'https://github.com/kylelingat',
    github_username: 'kylelingat',
    medium: 'https://medium.com/@kylejlingat',
    medium_username: 'kylejlingat'
  },
  {
    name: 'Jomari Jacinto',
    journal: 'https://Jomos1.github.io/Journal/',
    github:'https://github.com/Jomos1',
    github_username: 'Jomos1',
    medium: 'https://medium.com/@Jomos',
    medium_username: 'Jomos'
  },
  {
    name: 'Christian Allen Buco',
    journal: 'https://justbacon.github.io/JOURNAL/',
    github:'https://github.com/JustBacon',
    github_username: 'JustBacon',
    medium: 'https://medium.com/@JustBacon',
    medium_username: 'JustBacon'
  },
  {
    name: 'Edsen Casintahan',
    journal: 'https://sen2017.github.io/JOURNAL/',
    github:'https://github.com/Sen2017',
    github_username: 'Sen2017',
    medium: 'https://medium.com/@S3N.CA5',
    medium_username: 'S3N.CA5'
  },
  {
    name: 'Gwen Raquepo',
    journal: 'https://gwenraq.github.io/MyJournal/',
    github:'https://github.com/GwenRaq',
    github_username: 'GwenRaq',
    medium: 'https://medium.com/@gwen.raq',
    medium_username: 'gwen.raq'
  },
  {
    name: 'Zedrick Ara',
    journal: 'https://zedricka.github.io/Journa1/',
    github:'https://github.com/zedricka',
    github_username: 'zedricka',
    medium: 'https://medium.com/@zedrick.ara',
    medium_username: 'zedrick.ara'
  },
  {
    name: 'Talon Navarez',
    journal: 'https://github.com/ImTeqoo/Blog/blob/master/index.html',
    github:'https://github.com/ImTeqoo',
    github_username: 'ImTeqoo',
    medium: 'https://medium.com/@Chocomuffffin',
    medium_username: 'Chocomuffffin'
  },
  {
    name: 'Alex Aguinaldo',
    journal: 'https://github.com/PsionicBeats/Journal',
    github:'https://github.com/PsionicBeats',
    github_username: 'PsionicBeats',
    medium: 'https://medium.com/@psionicbeats',
    medium_username: 'psionicbeats'
  }


];


students.forEach(function( person ) {
  var student = $(
    '<div class="student">' +
      '<h3>'+ person.name +'</h3>' +
      '<div class="link_list">' +
        '<ul>' +
          '<li><a href="'+ person.journal +'">Personal Journal</a></li>' +
          '<li><a href="'+ person.github +'">Github: '+ person.github_username +'</a></li>'+
          '<li><a href="'+ person.medium +'">Medium: '+ person.medium_username +'</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>'
    ).appendTo('.students');
});
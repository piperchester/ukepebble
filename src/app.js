var UI = require('ui');

var main = new UI.Card({
  title: 'UkeChords',
  body: 'Press UP for bari\n\nPress DOWN for tenor'
});
main.show();

function chord_menu() {
  return new UI.Menu({
    sections: [{
      items: [{
        title: 'A'
      }, {
        title: 'A# (Bb)'
      }, {
        title: 'B'
      }, {
        title: 'C'
      }, {
        title: 'C# (Db)'
      }, {
        title: 'D'
      }, {
        title: 'D# (Eb)'
      }, {
        title: 'E'
      }, {
        title: 'F'
      }, {
        title: 'F# (Gb)'
      }, {
        title: 'G'
      }, {
        title: 'G# (Ab)'
      }]
    }]
  });
}


main.on('click', 'up', function(e) {
  var bari_menu = new chord_menu();
  bari_menu.show();
  bari_menu.on('select', function(e) {
    var card = new UI.Card();
    card.title(e.item.title);    
    switch (e.item.title) {
      case 'A':
        card.subtitle('2-2-2-0');
        break;
      case 'A# (Bb)':
        card.subtitle('0-3-3-1');
        break;
      case 'B':
        card.subtitle('1-4-4-2');
        break;
      case 'C':
        card.subtitle('2-0-1-0');
        break;
      case 'C# (Db)':
        card.subtitle('3-1-2-4');
        break;
      case 'D':
        card.subtitle('0-2-3-2');
        break;
      case 'D# (Eb)':
        card.subtitle('1-3-4-3');
        break;
      case 'E':
        card.subtitle('2-1-0-0');
        break;        
      case 'F':
        card.subtitle('3-2-1-1');
        break;  
      case 'F# (Gb)':
        card.subtitle('4-3-2-2');
        break;          
      case 'G':
        card.subtitle('0-0-0-3');
        break;
      case 'G# (Ab)':
        card.subtitle('1-1-1-4');
        break;                  
    }
    card.show();
  });
});

main.on('click', 'down', function(e) {
  var tenor_menu = new chord_menu();
  tenor_menu.show();
  tenor_menu.on('select', function(e) {
    var card = new UI.Card();
    card.title(e.item.title);    
    switch (e.item.title) {
      case 'A':
        card.subtitle('2-1-0-0');
        break;
      case 'A# (Bb)':
        card.subtitle('3-2-1-1');
        break;
      case 'B':
        card.subtitle('4-3-2-2');
        break;
      case 'C':
        card.subtitle('0-0-0-3');
        break;
      case 'C# (Db)':
        card.subtitle('1-1-1-3');
        break;
      case 'D':
        card.subtitle('2-2-2-0');
        break;
      case 'D# (Eb)':
        card.subtitle('0-3-3-1');
        break;
      case 'E':
        card.subtitle('1-4-0-2');
        break;        
      case 'F':
        card.subtitle('2-0-1-0');
        break;  
      case 'F# (Gb)':
        card.subtitle('3-1-2-1');
        break;          
      case 'G':
        card.subtitle('0-2-3-2');
        break;
      case 'G# (Ab)':
        card.subtitle('4-2-3-2');
        break;                  
    }
    card.show();
  });
});
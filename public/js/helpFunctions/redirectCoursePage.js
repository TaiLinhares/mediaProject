
function redirectCoursePage (courseName) {
    if (courseName == 'Energiespeichertechnologien für mobile Anwendungen'){
      console.log('Energiespeichertechnologien für mobile Anwendungen');
      window.location.replace("html/modulseite.html?course=EnergSpeichTech&index=6");
    }

    else if (courseName == 'Elektrische Energiesysteme'){
      console.log('Elektrische Energiesysteme');
      window.location.replace("html/modulseite.html?course=ElekEnerg&index=5");
    }
   
    else if (courseName == 'Technische Grundlagen der Informatik'){
      console.log('Technische Grundlagen der Informatik');
      window.location.replace("html/modulseite.html?course=TechGrunInforma&index=20");
    }

    else if (courseName == 'Formale Sprachen und Automaten'){
      console.log('Formale Sprachen und Automaten');
      window.location.replace("html/modulseite.html?course=ForSpraAuto&index=7");
    }
  
    else if (courseName == 'Grundlagen der Elektrotechnik'){
      console.log('Grundlagen der Elektrotechnik');
      window.location.replace("html/modulseite.html?course=GrunElektrotech&index=10");
    }

    else if (courseName == 'Wissenschaftliches Rechnen'){
      console.log('Wissenschaftliches Rechnen');
      window.location.replace("html/modulseite.html?course=WissensRechnen&index=23");
    }

    else if (courseName == 'Rechnerorganisation'){
      console.log('Rechnerorganisation');
      window.location.replace("html/modulseite.html?course=Rechnerorganisation&index=17");
    }

    else if (courseName == 'Signale und Systeme'){
      console.log('Signale und Systeme');
      window.location.replace("html/modulseite.html?course=SigSyst&index=18");
    }

    else if (courseName == 'Theoretische Grundlagen der Informatik'){
      console.log('Theoretische Grundlagen der Informatik');    
      window.location.replace("html/modulseite.html?course=TheGrunInforma&index=21");
    }

    else if (courseName == 'Einführung in die Programmierung mit Java'){
      console.log('Einführung in die Programmierung mit Java');
      window.location.replace("html/modulseite.html?course=EinProJava&index=4");
    }

    else if (courseName == 'Webtechnologien'){
      console.log('Webtechnologien');
      window.location.replace("html/modulseite.html?course=Webtechnologien&index=22");
    }

    else if (courseName == 'Grundlagen der elektronischen Messtechnik'){
      console.log('Grundlagen der elektronischen Messtechnik');
      window.location.replace("html/modulseite.html?course=GrunElekMestech&index=9");
    }

    else if (courseName == 'Softwaretechnik und Programmierparadigmen'){
      console.log('Softwaretechnik und Programmierparadigmen');
      window.location.replace("html/modulseite.html?course=SofttechProgParadig&index=19");
    }

    else if (courseName == 'Einführung in die Medieninformatik'){
      console.log('Einführung in die Medieninformatik');
      window.location.replace("html/modulseite.html?course=EinMed&index=2");
    }

    else if (courseName == 'Grundlagen der E-Technik (Service)'){
      console.log('Grundlagen der E-Technik (Service)');
      window.location.replace("html/modulseite.html?course=GrunETechServ&index=8");
    }

    else if (courseName == 'Rechnernetze und verteilte Systeme'){
      console.log('Rechnernetze und verteilte Systeme');
      window.location.replace("html/modulseite.html?course=RecVerteilteSysteme&index=16");
    }

    else if (courseName == 'Information Governance'){
      console.log('Information Governance');        
      window.location.replace("html/modulseite.html?course=InforGover&index=13");
    }

    else if (courseName == 'Einführung in die Programmierung'){
      console.log('Einführung in die Programmierung');
      window.location.replace("html/modulseite.html?course=EinPro&index=3");
    }

    else if (courseName == 'Praktisches Programmieren und Rechneraufbau'){
      console.log('Praktisches Programmieren und Rechneraufbau');
      window.location.replace("html/modulseite.html?course=PraProgRechBau&index=15");
    }

    else if (courseName == 'Einführung in die Programmierung (Service)'){
      console.log('Einführung in die Programmierung (Service)');
      window.location.replace("html/modulseite.html?course=EinfProSer&index=1");
    }

    else if (courseName == 'Informatik Propädeutikum'){
      console.log('Informatik Propädeutikum');
      window.location.replace("html/modulseite.html?course=InfoProp&index=12");
    }

    else if (courseName == 'Logik'){
      console.log('Logik');    
      window.location.replace("html/modulseite.html?course=Logik&index=14");
    }

    else if (courseName == 'Halbleiterbauelemente'){
      console.log('Halbleiterbauelemente');   
      window.location.replace("html/modulseite.html?course=Halbleiterbauelemente&index=11");
    }

    else if (courseName == 'Diskrete Strukturen'){
      console.log('Diskrete Strukturen');   
      window.location.replace("html/modulseite.html?course=DisStru&index=0");
    }
     
    else 
      console.log('Something went wrong');
  }
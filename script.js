

/*
        Pediremos al usuario que nos indique si tiene mascotas con el "switch"
        Crearemos 4 casos: 
        Si coloca 0: se indicará una respuesta que diga que: "Usted no tiene mascotas" y una imagen de tristeza
        Si coloca 1: se indicará un mensaje que le pregunte que mascota tiene? y se le mostrará una respuesta
        que diga Usted tiene un@ mascota y se llama "x"
        Si coloca 2: se indicará un mensaje que le pregunte 2 cosas:
        1. como se llama la primera mascota?
        2. como se llama la segunda mascota?
         y se le mostrará una respuesta que diga usted tiene 2 mascotas y se llaman nombre 1 y nombre 2
         
        Si coloco otro dato diferente: Se le mostrará una respuesta que indique que tiene más de 2 mascotas

    */

        var mascotas = parseInt (prompt("Cuantas mascotas tienes? (0, 1, 2 o más de 2)"));
        
        switch (mascotas) {
            case 0: 
                document.write("Usted no tiene mascotas");
                document.write("<img src='sad.jpg' alt='sad' />");
                break;
        
            case 1:
                var nombre = prompt ("Que mascota tiene?");
                document.write("Usted tiene una mascota y se llama " + nombre);
                break;
                
            case 2: 
                var nombre1 = prompt ("Como se llama la primera mascota?");
                var nombre2 = prompt ("Como se llama la segunda mascota?");
                document.write("Usted tiene 2 mascotas y se llaman " + nombre1 +" y "+ nombre2);
                break;
            
            default:
                document.write("Usted tiene mas de 2 mascostas" ); 
            
            }

        
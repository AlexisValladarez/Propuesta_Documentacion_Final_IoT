	function leeer() {
		
		$.getJSON("Json/Matrimonios.json", function(prueva){
			var ul = $("<ul></ul>");

			var table=$("<table <border='10'> <tr><td> Ofic. </td><td> Provincia </td><td> Cantón </td><td>Fecha Ins. </td><td>Hijos </td><td> Nacionalidad H.</td><td> Edad H. </td><td> Est. Civil </td><td> Niv. Educación</td><td> P. Actual</td><td> C. Actual</td><td> Nacionalidad M. </td><td> Edad M. </td><td>Est. Civil </td><td>Nivel Educación</td><td>P. Actual</td><td>C. Actual</td></tr>");
			
			for(var i=1; i<prueva.length;i++){
				
				table.append("<tr><td>"+prueva[i].FIELD1 
							 +"</td><td>"+prueva[i].FIELD2 
							 +"</td><td>"+prueva[i].FIELD3 
							 +"</td><td>"+prueva[i].FIELD8 
							 +"</td><td>"+prueva[i].FIELD9
							 +"</td><td>"+prueva[i].FIELD11
							 +"</td><td>"+prueva[i].FIELD17
							 +"</td><td>"+prueva[i].FIELD19
							 +"</td><td>"+prueva[i].FIELD22
							 +"</td><td>"+prueva[i].FIELD23
							 +"</td><td>"+prueva[i].FIELD24
							 +"</td><td>"+prueva[i].FIELD27
							 +"</td><td>"+prueva[i].FIELD33
							 +"</td><td>"+prueva[i].FIELD35
							 +"</td><td>"+prueva[i].FIELD38
							 +"</td><td>"+prueva[i].FIELD39
							 +"</td><td>"+prueva[i].FIELD40
							 +"</td></tr>");	
			}
			
		//document.write("</table>")
        $(".articulo1").append(table);
        //$("body").append(ul);
		});
		
	}

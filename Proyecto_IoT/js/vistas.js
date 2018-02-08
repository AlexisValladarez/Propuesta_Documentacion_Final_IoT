$.getJSON("Json/Matrimonios.json", function(prueva) {
	var a=0;
	var b = 0;
	var c = 0;
	
    for( var i = 1; i < prueva.length; i++ ) {
    	 
    	 var m = String(prueva[i].FIELD2);
    	 
		 if (m == "Loja") {
		 	
		 	a++;
		 }else if(m == "Azuay"){
		 	
		 	b++;
		 }else if(m == "Pichincha"){
		 	
		 	c++;
		 }

    }

		let massPopChart= new Chart(myChart1,{
			type: 'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
			data:{
				labels:['Loja' , 'Azuay' , 'Pichincha' ],
				datasets:[
				{
					label:'Matrimonios a nivel de Provincias',
					data:[
					a,
					b,
					c
					
					],
					backgroundColor:[
					'#D2FD7D',
					'#71A40B',
					'#72E7E9'
					
					],
					borderWidth: 3,
					borderColor: '#fff',
					hoverBorderWidth:3,
					hoverBorderColor: '#000'
				}
				]
			},
			options:{
				tittle:{
					display:true,
					text: 'Matrimonios del Ecuador',
					fontSize:25
				}
			}

		});
});
let myChart1=document.getElementById('myChart1').getContext('2d');

//==========================================================================

$.getJSON("Json/Matrimonios.json", function(prueva) {
	var a=0;
	var b = 0;
	var c = 0;
    for( var i = 0; i < prueva.length; i++ ) {
    	 var m = String(prueva[i].FIELD17);
		 if (m == "20") {
		 	a++;
		 }else if(m == "24"){
		 	b++;
		 }else if(m == "30"){
		 	c++;
		 }
    }

	let massPopChart1= new Chart(myChart2,{
		type: 'bar',
		data:{
			labels:['20 Años' , '24 Años' , '30 Años' ],
			datasets:[
			{
				label:'Edad de los Hombres al contraer Matrimonio',
				data:[
				a,
				b,
				c
				],
				backgroundColor:[
				'#71A40B',
				'#72E7E9',
				'#FA28AD'

				],
				borderWidth: 3,
				broderColor: '#777',
				hoverBorderWidth:3,
				hoverBorderColor: '#000'
			}
			]
		},
		options:{
			tittle:{
				display:true,
				text: 'Matrimonios del Ecuador',
				fontSize:25
			}
		}
	});

});
let myChart2=document.getElementById('myChart2').getContext('2d');

//==========================================================================
$.getJSON("Json/Matrimonios.json", function(prueva) {
	var a=0;
	var b = 0;
	var c = 0;
    for( var i = 0; i < prueva.length; i++ ) {
    	 var m = String(prueva[i].FIELD22);
		 if (m == "Primaria") {
		 	a++;
		 }else if(m == "Secundaria"){
		 	b++;
		 }else if(m == "Superior"){
		 	c++;
		 }
    }

	let massPopChart2= new Chart(myChart3,{
		type: 'doughnut',
		data:{
			labels:['Primaria' , 'Secundaria' , 'Supeior' ],
			datasets:[
			{
				label:'Nivel de Estudio ',
				data:[
				a,
				b,
				c
				],
				backgroundColor:[
                '#72e7e9',
                '#311B92',
                '#1976D2'
				],
				borderWidth: 3,
				broderColor: '#777',
				hoverBorderWidth:3,
				hoverBorderColor: '#000'
			}
			]
		},
		options:{
			tittle:{
				display:true,
				text: 'Poblacion del Ecuador',
				fontSize:25
			}
		}
	});
});
let myChart3=document.getElementById('myChart3').getContext('2d');
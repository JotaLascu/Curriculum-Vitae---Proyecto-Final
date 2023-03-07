
const CurriculumVitae = document.getElementById("curriculum_form");
const inputs = document.querySelectorAll("#curriculum_form input");


const expresiones  =  {

	nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  // Letras y espacios, pueden llevar acentos
	apellido : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  // Letras y espacios, pueden llevar acentos
	correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ,
	telefono : /^\d{7,14}$/,  // 7 a 14 numeros.
	ciudad : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	titulo : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	centro_estudio1: /^[0-9a-zA-ZÀ-ÿ\s]{1,40}$/,
	lugar_estudio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	curso: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	centro_estudio2: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
	cargo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	empresa: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
	localidad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,

}

const validarCurriculum = (e) =>{

	switch (e.target.name){

		case "nombre":

		if(expresiones.nombre.test(e.target.value)){

		document.getElementById('mensaje-error0').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error0').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "apellido":

		if(expresiones.apellido.test(e.target.value)){

		document.getElementById('mensaje-error1').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error1').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "correo":

		if(expresiones.correo.test(e.target.value)){

		document.getElementById('mensaje-error2').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error2').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "telefono":

		if(expresiones.telefono.test(e.target.value)){

		document.getElementById('mensaje-error3').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error3').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "ciudad":

		if(expresiones.ciudad.test(e.target.value)){

		document.getElementById('mensaje-error4').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error4').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "cargo":

		if(expresiones.cargo.test(e.target.value)){

		document.getElementById('mensaje-error5').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error5').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "empresa":

		if(expresiones.empresa.test(e.target.value)){

		document.getElementById('mensaje-error6').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error6').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "localidad":

		if(expresiones.localidad.test(e.target.value)){

		document.getElementById('mensaje-error7').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error7').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "titulo":

		if(expresiones.titulo.test(e.target.value)){

		document.getElementById('mensaje-error8').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error8').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "centro_estudio1":

		if(expresiones.centro_estudio1.test(e.target.value)){

		document.getElementById('mensaje-error9').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error9').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "lugar_estudio":

		if(expresiones.lugar_estudio.test(e.target.value)){

		document.getElementById('mensaje-error10').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error10').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "curso":

		if(expresiones.curso.test(e.target.value)){

		document.getElementById('mensaje-error11').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error11').classList.add("curriculum___mensaje-error-activo");

		}
		break;

		case "centro_estudio2":

		if(expresiones.centro_estudio2.test(e.target.value)){

		document.getElementById('mensaje-error12').classList.remove("curriculum___mensaje-error-activo")	

		} else{
		 	
		document.getElementById('mensaje-error12').classList.add("curriculum___mensaje-error-activo");

		}
		break;
	
}

}


inputs.forEach((input) => {	
	input.addEventListener ( 'keyup' ,  validarCurriculum ) ;
	input.addEventListener ( 'blur' ,  validarCurriculum ) ;
});



const Finished = document.getElementById("envio-curriculum")

const TerminarCurriculum = (e) => {
	e.preventDefaults
}

Finished.addEventListener("click", TerminarCurriculum)


const AgregarExpProf = document.getElementById("otro-trabajo");

const ExpProf = document.getElementById("curriculum__informacion-experiencia-profesional");

const AgregadoExpProf = () => {

	ExpProf.insertAdjacentHTML('afterend', 
	'<div class="curriculum_conteiner-informacion" id="curriculum__informacion-experiencia-profesional"><h2 class="curriculum__titulo-secundario">Experiencia Profesional : </h2><label for="year_month_exp3">Mes y Año de Ingreso: <input type="month" name="year_month_exp3" id="year_month_exp3"></label><label for="year_month_exp4">Mes y Año de Egreso: <input type="month" name="year_month_exp4" id="year_month_exp4"></label><label for="cargo">Cargo o Funciones: <input type="text" name="cargo" id="cargo"></label><p class="curriculum___mensaje-error" id="mensaje-error10">Solo se permiten letras y espacios, pueden llevar acentos</p><label for="empresa">Empresa o Local: <input type="text" name="empresa" id="empresa"></label><p class="curriculum___mensaje-error" id="mensaje-error11">Solo se permiten letras y espacios, pueden llevar acentos</p><label for="localidad">Localidad: <input type="text" name="localidad" id="localidad"></label><p class="curriculum___mensaje-error" id="mensaje-error12">Solo se permiten letras y espacios, pueden llevar acentos</p></div>')

}

AgregarExpProf.addEventListener("click", AgregadoExpProf)



const FormComp = document.getElementById("curriculum__informacion-formacion-complementaria");

const AgregarFormComp = document.getElementById("otro-curso")

const AgregadoFormComp = () => {

	FormComp.insertAdjacentHTML('afterend', '<div class="curriculum_conteiner-informacion" id="curriculum__informacion-formacion-complementaria"><h2 class="curriculum__titulo-secundario">Formación Complementaria : </h2><label for="curso">Nombre del curso: <input type="text" name="curso" id="curso"></label><p class="curriculum___mensaje-error" id="mensaje-error8">Solo se permiten letras y espacios, pueden llevar acentos</p><label for="centro_estudio3">Centro de Estudio: <input type="text" name="centro_estudio3" id="centro_estudio3"></label><p class="curriculum___mensaje-error" id="mensaje-error9">Solo se permiten letras y espacios, pueden llevar acentos</p><label for="year_month3">Mes y Año de Egreso: <input type="month" name="year_month3" id="year_month3"></label></div>')

}

AgregarFormComp.addEventListener("click", AgregadoFormComp)


const section = window.location.pathname;

if ('/loginAlumno.asp' === section) {
document.getElementsByTagName('form')[0].innerHTML =
'<div class="container login-container">' +
'	<div class="row">' +
'		<div class="col-md-6 login-form-1">' +
'			<h3>Iniciar sesión</h3>' +
'			<form method="POST" action="menuAlumno.asp" enctype="application/x-www-form-urlencoded">' +
'				<div class="form-group">' +
'		       		<input type="text" class="form-control" placeholder="Ingresá tu legajo *" value="" name="legajo" id="legajo" />' +
'				</div>' +
'				<div class="form-group">' +
'	         		<input type="password" class="form-control" placeholder="Ingresá tu contraseña*" value="" name="password" id="password" />' +
'	        	</div>' +
'		 		<div class="form-group text-center">' +
'		       		<button type="submit" class="btn btn-info">Ingresar</button>' +
'		   		</div>' +
'	    	</form>' +
'		</div>' +
'		<div class="col-md-6 login-form-2">' +
'			<div class="login-logo">' +
'				<img src="https://i.ibb.co/dgrNFBn/1884860.png" alt=""/>' +
'		  	</div>' +
'		 	<h3>Información importante</h3>' +
'	 		<div class="form-group">' +
'	    		<input type="text" class="form-control" placeholder="Obtener legajo" value="" id="dni" />' +
'	    	</div>' +
'		 	<div class="form-group text-center">' +
'		    	<button type="button" class="btn btn-warning" id="get-legajo">Buscar</button>' +
'		   	</div>' +
'		   	<hr>' +
'		</div>' +
'	</div>' +
'</div>';
}
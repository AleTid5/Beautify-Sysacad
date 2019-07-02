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
'		 		<div class="form-group">' +
'		       		<input type="submit" class="btnSubmit" value="Login" />' +
'		   		</div>' +
'	    	</form>' +
'		</div>' +
'		<div class="col-md-6 login-form-2">' +
'			<div class="login-logo">' +
'				<img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>' +
'		  	</div>' +
'		 	<h3>Información importante</h3>' +
'	 		<div class="form-group">' +
'	    		<input type="text" class="form-control" placeholder="Obtener legajo" value="" id="get-legajo" />' +
'	    	</div>' 
'		</div>' +
'	</div>' +
'</div>';
let DirectiveIf = {

	template:`<div>
	              <h1 v-text="title"></h1>
	              <p v-if="mostrar" v-html="message"></p>
                  <h1>Uso de v-if/v-else</h1>
	              <p v-if="user.permision">El usuario tiene permiso para ver esto</p>
	              <p v-else="user.permision">El usuario no tiene permiso para ver esto</p>
                   <h1>Uso de v-if/v-else-if/v-else</h1>
                  <p v-if="user.permision && user.vip">El usuario tiene permiso para ver esto y es vip</p>
                  <p v-else-if="user.permision">El usuario tiene permiso para ver esto</p>
                  <p v-else-if="user.vip">El usuario es vip</p>
                  <p v-else="user.permision">El usuario no tiene permiso ni es vip</p>
                     
	             	
	          </div>
	           `,
    data(){
    	return{
    		title:'Directiva v-If',
    		message: '<b>Hola desde la directive v-If</b>',
    		mostrar:true,
    		user:{
    			permision: false,
                vip: true
    		}

    	}
    }
}
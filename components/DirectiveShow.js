let DirectiveShow = {

	template:`<div>
	              <h1 v-text="title"></h1>
	              <p v-show="mostrar" v-html="message"></p>
	              <p v-show="user.permision">El usuario tiene permiso para ver esto</p>
	              <p v-show="!user.permision">El usuario no tiene permiso para ver esto</p>
	             	
	          </div>
	           `,
    data(){
    	return{
    		title:'Directiva v-show',
    		message: '<b>Hola desde la directive v-show</b>',
    		mostrar:true,
    		user:{
    			permision: false,
    		}

    		}
    	}
}
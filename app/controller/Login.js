Ext.define('ToDo.controller.Login',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			loginView : 'login',
			mainView : 'main',
			
			btnLogin : 'login formpanel[itemId=idFrmPnlLogin] button[itemId=idBtnLogin]',
			btnSignUpView : 'login formpanel[itemId=idFrmPnlLogin] button[itemId=idBtnOpenSignup]',
			btnRegister : 'login formpanel[itemId=idFrmPnlSignup] button[itemId=idBtnRegister]',
			btnRegisterCancel : 'login formpanel[itemId=idFrmPnlSignup] button[itemId=idBtnRegisterCancel]'
		},
		control: {
			btnLogin: {
				tap: 'onLogin'
			},
			btnSignUpView: {
				tap: 'openSignUpView'
			},
			btnRegister: {
				tap: 'createNewUser'
			},
			btnRegisterCancel: {
				tap: 'openLoginView'
			}
		}
	},
	openSignUpView: function(btn,e,eOpts){
		//var cardLayout = btn.up('login');
		this.getLoginView().setActiveItem(1);
	},
	openLoginView: function(btn,e,eOpts){
		this.getLoginView().setActiveItem(0);
	},
	onLogin: function(btn,e,eOpts){
		var me = this;
		
		me.getMainView().setActiveItem('homepage');
	},
	createNewUser: function(btn, e, eOpts){
		alert('Register');
	}
	
});
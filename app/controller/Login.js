Ext.define('ToDo.controller.Login',{
	extend: 'Ext.app.Controller',
	config: {
		control: {
			'login formpanel[itemId=idFrmPnlLogin] button[itemId=idBtnLogin]': {
				tap: 'onLogin'
			},
			'login formpanel[itemId=idFrmPnlLogin] button[itemId=idBtnSignup]': {
				tap: 'openSignUpView'
			},
			'login formpanel[itemId=idFrmPnlSignUp] button': {
				tap: 'onLogin'
			}
		}
	},
	onLogin: function(btn,e,eOpts){
		alert('Login');
	},
	openSignUpView: function(btn,e,eOpts){
		var cardLayout = btn.up('login');
		cardLayout.setActiveItem(1);
	}
});
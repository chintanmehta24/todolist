Ext.define('ToDo.view.Login',{
	extend: 'Ext.form.Panel',
	xtype: 'login',
	alias: 'widget.login',
	config: {
		layout: 'card',
		activeItem: 0,
		items: [
			{
				xtype: 'titlebar',
				docked: 'top',
				title: 'Title',
			},
			{
				xtype: 'formpanel',
				itemId: 'idFrmPnlLogin',
				items: [
					{	
						xtype: 'fieldset',
						items: [
							{
								xtype: 'textfield',
								//label: 'Username',
								placeHolder: 'Username',
								name: 'username'
							},
							{
								xtype: 'passwordfield',
								//label: 'Password',
								placeHolder: 'Password',
								name: 'password'
							},
						]	
					},
					{
						xtype: 'button',
						itemId: 'idBtnLogin',
						text: 'Login'
					},
					{
						xtype: 'button',
						itemId: 'idBtnSignup',
						text: 'Sign Up',
						ui: 'plain'
					}
				]	
			}, {
				xtype: 'formpanel',
				itemId: 'idFrmPnlSignup',
				items: [
					{	
						xtype: 'fieldset',
						items: [
							{
								xtype: 'emailfield',
								placeHolder: 'Email',
								name: 'email'
							},
							{
								xtype: 'textfield',
								placeHolder: 'Username',
								name: 'username'
							},
							{
								xtype: 'passwordfield',
								placeHolder: 'Password',
								name: 'password'
							},
							{
								xtype: 'passwordfield',
								placeHolder: 'Confirm Password',
								name: 'confirmpassword'
							}
						]	
					},
					{
						xtype: 'button',
						text: 'Register'
					},
					{
						xtype: 'button',
						text: 'Cancel'
					}
				]	
			}
		]
	}
});

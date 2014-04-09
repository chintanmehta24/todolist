Ext.define('ToDo.view.HomePage',{
	extend: 'Ext.List',
	xtype: 'homepage',
	alias: 'widget.homepage',
	config: {
		
		store: {
			fields: ['task'],
			data: []
		},
		
		itemTpl : new Ext.XTemplate(
			'{task}'
		), 
		
		items: [
			{
				xtype: 'toolbar',
				docked: 'top',
				items: [
					{
						xtype: 'spacer'
					},
					{
						xtype: 'textfield',
						placeHolder: 'New Task'
					},
					{
						text: 'Add',
						handler: function(btn, e, eOpts){
							var textField = this.up('toolbar').down('textfield'),
								taskStore = this.up('homepage').getStore();
								
							taskStore.add({
								task:textField.getValue()
							});
							textField.reset();
						}
					}
				]
			},
			{
				xtype: 'panel',
				docked: 'bottom',				
				height: '10em',
				
				html : 'Message box',
				style: 'border-top:2px solid black; ',
			}
		]
	}
});

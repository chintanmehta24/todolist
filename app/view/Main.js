Ext.define('ToDo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
   
    config: {
    	layout: 'card',
    	activeItem: 0,
        items: [
            {
				xtype: 'login'
            }
        ]
    }
});

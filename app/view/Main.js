Ext.define('ToDo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
   
    config: {
    	layout: 'card',
    	activeItem: 1,
        items: [
            {
				xtype: 'login'
            },
            {
            	xtype: 'homepage'
            }
        ]
    }
});

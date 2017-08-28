export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'charitableeventdev',
				host: 'localhost'
    	},
    	production: {
				db: 'charitableevent',
				host: 'localhost'
    	}
    }

}
function $mol_log( path : string , values : any[] ) {
	var filter = $mol_log.filter() 
	if( !filter || !filter.test( path ) ) return
	console.log( $jin.time.moment().toString( 'hh:mm:ss' ) , path , ...values )
	return path
}
module $mol_log {
	var _filter : RegExp
	export function filter( ...diff : RegExp[] ) {
		if( diff.length ) {
			sessionStorage[ '$mol_log.filter()' ] = diff[0].source
			_filter = diff[0]
		}
		
		if( _filter ) return _filter
		
		var source = sessionStorage[ '$mol_log.filter()' ]
		if( !source ) return null
		
		return _filter = RegExp( source , 'i' )
	}
}
namespace $ {
	
	export function $mol_assert_ok( value : any ) {
		if( value ) return
		throw new Error( `Not true (${value})` )
	}
	
	export function $mol_assert_not( value : any ) {
		if( !value ) return
		throw new Error( `Not false (${value})` )
	}
	
	export function $mol_assert_fail( message : string ) {
		throw new Error( message )
	}
	
	export function $mol_assert_equal< Value >( a : Value , b : Value ) {
		if( a === b ) return
		throw new Error( `Not equal (${a},${b})` )
	}
	
	export function $mol_assert_unique< Value >( a : Value , b : Value ) {
		if( a !== b ) return
		throw new Error( `Not unique (${a},${b})` )
	}
	
}

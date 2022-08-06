/**
 * Generated from 'examples/jsm/nodes/utils/VelocityNode.js'
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('examples/jsm/nodes/inputs/Vector3Node.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three', 'examples/jsm/nodes/inputs/Vector3Node.js'], factory) :
	(global = global || self, factory(global.THREE = global.THREE || {}, global.THREE, global.THREE));
}(this, function (exports, THREE, Vector3Node_js) { 'use strict';

	/**
	 * @author sunag / http://www.sunag.com.br/
	 */

	function VelocityNode( target, params ) {

		Vector3Node_js.Vector3Node.call( this );

		this.params = {};

		this.velocity = new THREE.Vector3();

		this.setTarget( target );
		this.setParams( params );

	}

	VelocityNode.prototype = Object.create( Vector3Node_js.Vector3Node.prototype );
	VelocityNode.prototype.constructor = VelocityNode;
	VelocityNode.prototype.nodeType = "Velocity";

	VelocityNode.prototype.getReadonly = function ( /*builder*/ ) {

		return false;

	};

	VelocityNode.prototype.setParams = function ( params ) {

		switch ( this.params.type ) {

			case "elastic":

				delete this.moment;

				delete this.speed;
				delete this.springVelocity;

				delete this.lastVelocity;

				break;

		}

		this.params = params || {};

		switch ( this.params.type ) {

			case "elastic":

				this.moment = new THREE.Vector3();

				this.speed = new THREE.Vector3();
				this.springVelocity = new THREE.Vector3();

				this.lastVelocity = new THREE.Vector3();

				break;

		}

	};

	VelocityNode.prototype.setTarget = function ( target ) {

		if ( this.target ) {

			delete this.position;
			delete this.oldPosition;

		}

		this.target = target;

		if ( target ) {

			this.position = target.getWorldPosition( this.position || new THREE.Vector3() );
			this.oldPosition = this.position.clone();

		}

	};

	VelocityNode.prototype.updateFrameVelocity = function ( /*frame*/ ) {

		if ( this.target ) {

			this.position = this.target.getWorldPosition( this.position || new THREE.Vector3() );
			this.velocity.subVectors( this.position, this.oldPosition );
			this.oldPosition.copy( this.position );

		}

	};

	VelocityNode.prototype.updateFrame = function ( frame ) {

		this.updateFrameVelocity( frame );

		switch ( this.params.type ) {

			case "elastic":

				// convert to real scale: 0 at 1 values
				var deltaFps = frame.delta * ( this.params.fps || 60 );

				var spring = Math.pow( this.params.spring, deltaFps ),
					damping = Math.pow( this.params.damping, deltaFps );

				// fix relative frame-rate
				this.velocity.multiplyScalar( Math.exp( - this.params.damping * deltaFps ) );

				// elastic
				this.velocity.add( this.springVelocity );
				this.velocity.add( this.speed.multiplyScalar( damping ).multiplyScalar( 1 - spring ) );

				// speed
				this.speed.subVectors( this.velocity, this.lastVelocity );

				// spring velocity
				this.springVelocity.add( this.speed );
				this.springVelocity.multiplyScalar( spring );

				// moment
				this.moment.add( this.springVelocity );

				// damping
				this.moment.multiplyScalar( damping );

				this.lastVelocity.copy( this.velocity );
				this.value.copy( this.moment );

				break;

			default:

				this.value.copy( this.velocity );

		}

	};

	VelocityNode.prototype.copy = function ( source ) {

		Vector3Node_js.Vector3Node.prototype.copy.call( this, source );

		if ( source.target ) this.setTarget( source.target );

		this.setParams( source.params );

		return this;

	};

	VelocityNode.prototype.toJSON = function ( meta ) {

		var data = this.getJSONNode( meta );

		if ( ! data ) {

			data = this.createJSONNode( meta );

			if ( this.target ) data.target = this.target.uuid;

			// clone params
			data.params = JSON.parse( JSON.stringify( this.params ) );

		}

		return data;

	};

	exports.VelocityNode = VelocityNode;

}));

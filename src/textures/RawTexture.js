import { Texture } from './Texture.js';
import { NearestFilter } from '../constants.js';

class RawTexture extends Texture {

	constructor( sourceTexture ) {

		super();

		this.sourceTexture = sourceTexture;

		this.isRawTexture = true;

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.generateMipmaps = false;

		this.needsUpdate = true;

	}

}

export { RawTexture };

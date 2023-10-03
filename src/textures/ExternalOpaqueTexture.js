import { ExternalTexture } from './ExternalTexture.js';
import { NearestFilter } from '../constants.js';

class ExternalOpaqueTexture extends ExternalTexture {

	constructor( glTextureGetter, width = 1, height = 1, format, type, mapping, wrapS, wrapT, magFilter = NearestFilter, minFilter = NearestFilter, anisotropy, encoding ) {

		super( null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

		this.isExternalOpaqueTexture = true;

		this.image = { data: null, width, height };
		this._glTextureGetter = glTextureGetter;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

	update() {

		const newData = this._glTextureGetter();
		if ( newData ) {

			Object.assign( this.image, newData );

		}

		this.needsUpdate = true;

	}

	// TODO: Override toJSON and throw an error?
	// The closest we could get to serialisation would be dumping
	// the current texture content to pixels and saving it as a static image.

}

export { ExternalOpaqueTexture };

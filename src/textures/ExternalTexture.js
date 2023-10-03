import { Texture } from './Texture.js';
import { NearestFilter } from '../constants.js';

class ExternalTexture extends Texture {

	constructor( glTexture, width = 1, height = 1, format, type, mapping, wrapS, wrapT, magFilter = NearestFilter, minFilter = NearestFilter, anisotropy, encoding ) {

		super( null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

		this.isExternalTexture = true;

		this.image = { data: glTexture, width, height };

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

	// TODO: Override toJSON and throw an error?
	// The closest we could get to serialisation would be dumping
	// the current texture content to pixels and saving it as a static image.

}

export { ExternalTexture };

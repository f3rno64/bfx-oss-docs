'use strict'

/**
 * Nunjucks rendering environment, containing global variables/configured tags/
 * filters/etc.
 *
 * @class
 * @memberof module:nunjucks
 * @name Environment
 */


/**
 * The constructor takes a list of loaders and a hash of configuration
 * parameters as opts. If loaders is null, it defaults to loading from the
 * current directory or URL. You can pass a single loader or an array of
 * loaders. If you pass an array of loaders, nunjucks will walk through them in
 * order until one of them finds a template. See Loader for more info about
 * loaders.
 *
 * @constructor
 * @memberof module:nunjucks.Environment
 * @see {@link module:nunjucks.Loader}
 *
 * @param {module:nunjucks.Loader[]} [loaders=null] - optional single or
 *   multiple loaders to be used for template loading.
 * @param {object} [opts={}] - options
 */

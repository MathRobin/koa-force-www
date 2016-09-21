/*globals module */

function *forceWww(next) {
    const
        request = this.request,
        host    = request.header.host;

    if (!host.startsWith('www')) {
        this.status = 301;
        this.redirect(request.protocol + '://www.' + host + request.url);
    } else {
        yield next;
    }
}

module.exports = forceWww;

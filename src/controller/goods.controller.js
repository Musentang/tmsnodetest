class GoodsContriller {
	async upload(ctx, next) {
		ctx.body = 'upload success';
	}
}

module.exports = new GoodsContriller;
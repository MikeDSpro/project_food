export default ({ secret }) => {
    return async function basicAuth(ctx, next) {

        const header = ctx.headers.authorization
        jwt.compare(token, secret)
        if (ok)

        await next()
    }
}




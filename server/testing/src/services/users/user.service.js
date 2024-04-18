import { UsersService } from "./users.class.js"
import { hashPassword } from "../auth.js";

export default (app) => {
    const options = {
        paginate: app.get('paginate'),
    }
    app.use('/users', new UsersService());
    const users = app.service('users');
    users.hooks({
        before: {
            all: [async (context) => {
                console.log(" Before hook called with context: ", context);
            }],
            create: async (context) => {
                const { password, ...otherFields } = context.data;
                context.data.password = await hashPassword(password);
                return { ...otherFields, password: context.data.password };
            },
        },
    });
};

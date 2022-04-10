import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user/user-resolver";
import { AuthResolver } from "./resolvers/auth/auth-resolver";
import { TypegooseMiddleware } from "./typegoose-middleware";
import {ObjectId} from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import * as path from "path"

export const getSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AuthResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
      });
    return schema
}


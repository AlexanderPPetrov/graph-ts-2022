import { Length, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class GameInput {
  @Field()
  @Length(2, 30)
  name: string;

  @Field()
  @Length(2,500)
  description: string;

  @Field()
  @MinLength(5)
  image: string;
}
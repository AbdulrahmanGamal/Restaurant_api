
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
FAST_FOOD = 'Fast food',
CAFE = 'Cafe',
FINE_DINNING= 'Fine Dinning'

}

@Schema()
export class Restaurant {

    @Prop()
    name: string

    @Prop()
    description: string

    @Prop()
    phoneNo: number

    @Prop()
    address: string

    @Prop()
    category: Category   

    @Prop()
    image?: object[]   

}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)
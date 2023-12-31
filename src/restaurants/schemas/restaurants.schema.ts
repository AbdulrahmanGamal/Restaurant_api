
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Location {
  @Prop({ type: String, enum: ['Point'] })
  type: string;

  @Prop({ index: '2dsphere' })
  coordinates: Number[];

  formattedAddress: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}


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
    images?: object[]   

}
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant)
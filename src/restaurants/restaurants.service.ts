import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './schemas/restaurants.schema';
import  * as mongoose from 'mongoose';


@Injectable()
export class RestaurantsService {
    constructor(
        @InjectModel(Restaurant.name)
        private restaurantModel:mongoose.Model<Restaurant>
    ){}

    async findAll() : Promise<Restaurant[]>{
        const restaurant = await this.restaurantModel.find();
        return restaurant;

    }
}

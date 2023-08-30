import { Controller, Get, Post, Body, Param,Delete,Put, Query } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './schemas/restaurants.schema';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { query } from 'express';
import { Query as ExpressQuery } from 'express-serve-static-core';
@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantService: RestaurantsService) { }

    @Get()
    async getAllRestaurants(@Query() query:ExpressQuery ): Promise<Restaurant[]> {
        return this.restaurantService.findAll(  query);
    }


    @Post()
    async createRestaurant(
        @Body()
        restaurant: CreateRestaurantDto
    ): Promise<Restaurant> {
        return this.restaurantService.create(restaurant);
    }
    @Get(':id')
    async getRestaurant(
      @Param('id')
      id: string,
    ): Promise<Restaurant> {
      return this.restaurantService.findById(id);
    }



  @Put(':id')
  async updateRestaurant(
    @Param('id')
    id: string,
    @Body()
    restaurant: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    await this.restaurantService.findById(id);

    return this.restaurantService.updateById(id, restaurant);
  }

  @Delete(':id')
  async deleteRestaurant(
    @Param('id')
    id: string,
  ): Promise<{ deleted: Boolean }> {
    await this.restaurantService.findById(id);

    const restaurant = this.restaurantService.deleteById(id);

    if (restaurant) {
      return {
        deleted: true,
      };
    }
  }
}

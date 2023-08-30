import { IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { Category } from '../schemas/restaurants.schema';

export class UpdateRestaurantDto {

  @IsString()
  @IsOptional()
  readonly name: string;
  @IsString()
  @IsOptional()
  readonly description: string;
  @IsEmail({}, { message: 'Please enter a correct email' })
  @IsOptional()
  readonly email: string;
  @IsOptional()
  @IsPhoneNumber()
  readonly phoneNo: number;
  @IsString()
  @IsOptional()
  readonly address: string;
  @IsEnum(Category, { message: 'Please enter a correct category' })
  @IsOptional()
  readonly category: Category;
}
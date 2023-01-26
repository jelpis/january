import { PartialType } from '@nestjs/mapped-types';
import { CreateJanuaryDto } from './create-january.dto';

export class UpdateJanuaryDto extends PartialType(CreateJanuaryDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreatePt3Dto } from './create-pt3.dto';

export class UpdatePt3Dto extends PartialType(CreatePt3Dto) {}
